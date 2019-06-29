$(document).ready(function(){
        name();
        text();
    }
);

function name(){
    var text = 'Meet Shashwati';

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

captions =  'She studies at South Dakota School of Mines and Technology, she codes, and stives to make impact';

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




