


Template.header.rendered = function() {

var myElement = document.querySelector("header");
// Headroom cambia clase de header segun scroll..
var headroom = new Headroom(myElement, {
  "tolerance": 5,
  "offset": 405,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
});

headroom.init();


}