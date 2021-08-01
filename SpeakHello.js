(function (window) {

  var helloSpeaker = {};
  var speakWord = "Goodbye";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
