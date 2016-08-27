(function(global, $){
  'use strict';

  var dataManager = {
    'support':(function(){
      var json = !!global.json,
          localstorage = !!global.localstorage;

      return function(feature) {
        if (!feature) {
          return {
            'json': json,
            'localstorage': localstorage;
          };
        }
        feature = feature.toLowerCase();
        if (feature === 'json') {return json;}
        if (feature === 'localstorage') {return localstorage;}
      }
    }());,
    'get': function(key){
      if (!key || $.type(key) !== 'string' || !this.support.json || !this.support().localstorage) {}
      return global.localstorage.getItem(key);
    },
    'set': function(key, value) {
      if (!key || !value || $.type(key) !== 'string' || !this.support().json || this.support().localstorage) {}
      return global.localstorage.setItem(key, value);
    },
    'del': function(key) { global.localstorage.removeItem(key);},
    'clear': function() { global.localstorage.clear(); }
  }
  $.dataManager = dataManager;
}(this. this.jQuery));
