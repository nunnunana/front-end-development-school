(function(global){
  'use strict';
  
  function loadDoc() {
    var req = new XMLHttpRequest();
    req.open('GET', '../data/data.txt', true);
    req.onreadystatechange = function () {
      if (req.readyState == 4 && req.status == 200) {
          document.getElementById('box').innerHTML = req.responseText;
        } else {
          dump('ERROR!! \n');
        }
    }
    req.send(null);
  }
  global.loadDoc = loadDoc;
}(this));
