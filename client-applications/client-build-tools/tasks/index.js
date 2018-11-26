const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const to5 = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const paths = require('../paths');
const compilerOptions = require('../babel-options');
const assign = Object.assign || require('object.assign');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const htmlmin = require('gulp-htmlmin');

const bundler = require('aurelia-bundler');
const bundles = require('../bundles.js');

const del = require('del');
const vinylPaths = require('vinyl-paths');

const webdriverUpdate = require('gulp-protractor').webdriver_update;
const webdriverStandalone = require('gulp-protractor').webdriver_standalone;
const protractor = require('gulp-protractor').protractor;

const Karma = require('karma').Server;
const eslint = require('gulp-eslint');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions('systemjs'))))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(done) {
  gulp.series(
    'clean',
    gulp.parallel('build-system', 'build-html', 'build-css')
  );
  done()
});

const config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', gulp.series('build', function() {
  return bundler.bundle(config);
}));

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});

// deletes all files in the output path
gulp.task('clean', gulp.series('unbundle', function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
}));

// for full documentation of gulp-protractor,
// please check https://github.com/mllrsohn/gulp-protractor
gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver-standalone', gulp.series('webdriver-update', webdriverStandalone));

gulp.task('clean-e2e', function() {
  return del(paths.e2eSpecsDist + '*');
});

// transpiles files in
// /test/e2e/src/ from es6 to es5
// then copies them to test/e2e/dist/
gulp.task('build-e2e', gulp.series('clean-e2e', function() {
  return gulp.src(paths.e2eSpecsSrc)
      .pipe(plumber())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(to5(assign({}, compilerOptions('commonjs'))))
      .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
      .pipe(gulp.dest(paths.e2eSpecsDist));
}));

// runs build-e2e task
// then runs end to end tasks
// using Protractor: http://angular.github.io/protractor/
gulp.task('e2e', gulp.series('build-e2e', function(cb) {
  return gulp.src(paths.e2eSpecsDist + '**/*.js')
    .pipe(protractor({
      configFile: 'protractor.conf.js',
      args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('end', function() { process.exit(); })
    .on('error', function(e) { throw e; });
}));

// runs eslint on all .js files
gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', gulp.series('build', function(done) {
  return browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
}));

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve-bundle', gulp.series('bundle', function(done) {
  return browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
}));

/**
 * Run test once and exit
 */
gulp.task('test', (test, done) => {
  new Karma({
    configFile: __dirname + '/../../../../karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  new Karma({
    configFile: __dirname + '/../../../../karma.conf.js'
  }, done).start();
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function(done) {
  new Karma({
    configFile: __dirname + '/../../../../karma.conf.js',
    singleRun: true,
    reporters: ['coverage'],
    coverageReporter: {
      reporters: [
        { type: 'html', dir: 'coverage' },
        { type: 'text' }
      ]
    }
  }, done).start();
});

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', gulp.series('serve', function(done) {
  gulp.watch(paths.source, gulp.series('build-system', browserSync.reload)).on('change', reportChange);
  gulp.watch(paths.html, gulp.series('build-html', browserSync.reload)).on('change', reportChange);
  gulp.watch(paths.css, gulp.series('build-css')).on('change', reportChange);
  gulp.watch(paths.style, function() {
    return gulp.src(paths.style)
      .pipe(browserSync.stream());
  }).on('change', reportChange);
  done();
}));
