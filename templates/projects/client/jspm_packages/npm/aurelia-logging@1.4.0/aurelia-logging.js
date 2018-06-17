/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLogger = getLogger;
  exports.addAppender = addAppender;
  exports.removeAppender = removeAppender;
  exports.getAppenders = getAppenders;
  exports.clearAppenders = clearAppenders;
  exports.addCustomLevel = addCustomLevel;
  exports.removeCustomLevel = removeCustomLevel;
  exports.setLevel = setLevel;
  exports.getLevel = getLevel;

  

  var logLevel = exports.logLevel = {
    none: 0,
    error: 10,
    warn: 20,
    info: 30,
    debug: 40
  };

  var loggers = {};
  var appenders = [];
  var globalDefaultLevel = logLevel.none;

  var standardLevels = ['none', 'error', 'warn', 'info', 'debug'];
  function isStandardLevel(level) {
    return standardLevels.filter(function (l) {
      return l === level;
    }).length > 0;
  }

  function appendArgs() {
    return [this].concat(Array.prototype.slice.call(arguments));
  }

  function logFactory(level) {
    var threshold = logLevel[level];
    return function () {
      if (this.level < threshold) {
        return;
      }

      var args = appendArgs.apply(this, arguments);
      var i = appenders.length;
      while (i--) {
        var _appenders$i;

        (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
      }
    };
  }

  function logFactoryCustom(level) {
    var threshold = logLevel[level];
    return function () {
      if (this.level < threshold) {
        return;
      }

      var args = appendArgs.apply(this, arguments);
      var i = appenders.length;
      while (i--) {
        var appender = appenders[i];
        if (appender[level] !== undefined) {
          appender[level].apply(appender, args);
        }
      }
    };
  }

  function connectLoggers() {
    var proto = Logger.prototype;
    for (var _level in logLevel) {
      if (isStandardLevel(_level)) {
        if (_level !== 'none') {
          proto[_level] = logFactory(_level);
        }
      } else {
        proto[_level] = logFactoryCustom(_level);
      }
    }
  }

  function disconnectLoggers() {
    var proto = Logger.prototype;
    for (var _level2 in logLevel) {
      if (_level2 !== 'none') {
        proto[_level2] = function () {};
      }
    }
  }

  function getLogger(id) {
    return loggers[id] || new Logger(id);
  }

  function addAppender(appender) {
    if (appenders.push(appender) === 1) {
      connectLoggers();
    }
  }

  function removeAppender(appender) {
    appenders = appenders.filter(function (a) {
      return a !== appender;
    });
  }

  function getAppenders() {
    return [].concat(appenders);
  }

  function clearAppenders() {
    appenders = [];
    disconnectLoggers();
  }

  function addCustomLevel(name, value) {
    if (logLevel[name] !== undefined) {
      throw Error('Log level "' + name + '" already exists.');
    }

    if (isNaN(value)) {
      throw Error('Value must be a number.');
    }

    logLevel[name] = value;

    if (appenders.length > 0) {
      connectLoggers();
    } else {
      Logger.prototype[name] = function () {};
    }
  }

  function removeCustomLevel(name) {
    if (logLevel[name] === undefined) {
      return;
    }

    if (isStandardLevel(name)) {
      throw Error('Built-in log level "' + name + '" cannot be removed.');
    }

    delete logLevel[name];
    delete Logger.prototype[name];
  }

  function setLevel(level) {
    globalDefaultLevel = level;
    for (var key in loggers) {
      loggers[key].setLevel(level);
    }
  }

  function getLevel() {
    return globalDefaultLevel;
  }

  var Logger = exports.Logger = function () {
    function Logger(id) {
      

      var cached = loggers[id];
      if (cached) {
        return cached;
      }

      loggers[id] = this;
      this.id = id;
      this.level = globalDefaultLevel;
    }

    Logger.prototype.debug = function debug(message) {};

    Logger.prototype.info = function info(message) {};

    Logger.prototype.warn = function warn(message) {};

    Logger.prototype.error = function error(message) {};

    Logger.prototype.setLevel = function setLevel(level) {
      this.level = level;
    };

    return Logger;
  }();
});