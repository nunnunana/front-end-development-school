/* Small Gallery.js */

var thumnails = queryAll('.thum');

var chageBg = function(){
  var bgImage = this.getAttribute('data-photo'); 
  body.setAttribute('style', 'background-image: url(images/photo-' + bgImage + '.jpeg)' )
};

for (var i = 0; i < thumnails.length; i++) {
  var thum = 'thum_' + i; 
  thum = thumnails[i];
  
  thum.onclick 
  thum.onfocus = chageBg;
};  
