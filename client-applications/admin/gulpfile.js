'use strict';

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

/* load some files into the registry */
// const hub = new HubRegistry(['node_modules/@coinmesh/client-build-tools/tasks/*.js']);
const hub = new HubRegistry(['node_modules/@coinmesh/client-build-tools/tasks/index.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);
