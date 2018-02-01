$(document).ready(function() {

console.log(window.location.href)
  var url = "http://cors-proxy.htmldriven.com/?url=https://medium.com/@tPhilosophia/a-romp-through-early-19th-century-philosophy-cf698ad9aef2";

  $.get(url, function(response) {
    var body = response.body
    var title = $(body).find('.graf--title').text();
    $('#description').text("Press play to listen to _" + title + "_ on Medium Narrator");

    var text = $(body).find('.sectionLayout--insetColumn').children('p').text();
    // console.log('text', text);

    var EndCallback = function() {
      responsiveVoice.speak("Brought to you by think Philosophy and alfonso tech.", 'US English Female', {pitch: 1, rate: 1, volume: 1});
    }

    $('#play').on('click', function() {
      console.log('play button clicked');
      responsiveVoice.speak(text, ['UK English Female'], {pitch: 1, rate: 1.1, volume: 1, onend: EndCallback});
    })

    $('#stop').on('click', function() {
      console.log('stop button clicked');
      responsiveVoice.cancel();
    })

    $('#pause').on('click', function() {
      console.log('pause button clicked');
      responsiveVoice.pause();
    })

    $('#resume').on('click', function() {
      console.log('resume button clicked');
      responsiveVoice.resume();
    })

  });

});
