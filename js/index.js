$(document).ready(function(){
        name();
        text();
    }
);

function name(){
    var text = 'MEET SHASHWATI';

    var textElements = text.split("").map(function(c) {
      return $('<span id="' + c + '">' + c + '</span>');
    });
    
    var el = $('#name');
    var delay = 80; // Tune this for different letter delays.
    textElements.forEach(function(e, i) {
        el.append(e);
        e.hide();
        setTimeout(function() {
            e.fadeIn(3000)
        }, 100 + i * delay)
    })
}

captions =  'She codes, stives to make impact, and enjoys visiting new cities';

function text() {
    var textElements = captions.split("\n").map(function(c) {
        return $('<span id="' + c + '">' + c + '</span><br>');
      });
      
      var el = $('#text');
      var delay = 80; // Tune this for different letter delays.
      textElements.forEach(function(e, i) {
          el.append(e);
          e.hide();
          setTimeout(function() {
              e.fadeIn(3000)
          }, 100 + i * delay)
      })    
}




