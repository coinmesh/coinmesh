System.register([], function (_export, _context) {
  "use strict";

  var Person;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Person', Person = function Person(data) {
        _classCallCheck(this, Person);

        this.firstName = '';
        this.lastName = '';
        this.type = 'person';

        Object.assign(this, data);
      });

      _export('Person', Person);
    }
  };
});
//# sourceMappingURL=person.js.map
