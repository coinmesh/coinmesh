System.register(['models/person'], function (_export, _context) {
  "use strict";

  var Person, Index;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_modelsPerson) {
      Person = _modelsPerson.Person;
    }],
    execute: function () {
      _export('Index', Index = function Index() {
        _classCallCheck(this, Index);

        this.person = new Person();
      });

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=index.js.map
