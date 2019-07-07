$(document).ready(function(){
        $(".about_rectangle").hide();
        name();
        text();

        $("#home").click(function(){
            $(".about_rectangle").hide();
            $(".intro_rectangle").show();
            name();
            text();
        });  
        
        $("#about").click(function(){
            $(".intro_rectangle").hide();
            $(".about_rectangle").show();
            about();
        }); 
        
    }
);

;
function name(){
    var text = 'Meet Shashwati'
    var textElements = text.split("").map(function(c) {
      return $('<span id="' + c + '">' + c + '</span>');
    });
    
    var el = $('#name');
    el.text("");
    var delay = 80; // Tune this for different letter delays.
    textElements.forEach(function(e, i) {
        el.append(e);
        e.hide();
        setTimeout(function() {
            e.fadeIn(3000)
        }, 100 + i * delay)
    })
}

captions =  'A software engineer who strives to make impact';

function text() {
    var textElements = captions.split("\n").map(function(c) {
        return $('<span id="' + c + '">' + c + '</span><br>');
      });
      
      var el = $('#text');
      el.text("");
      var delay = 80; // Tune this for different letter delays.
      textElements.forEach(function(e, i) {
          el.append(e);
          e.hide();
          setTimeout(function() {
              e.fadeIn(3000)
          }, 100 + i * delay)
      })    
}

me = 'Hi! My name is Shashwati Shradha. I am a senior pursuing my Bachelors in Computer Science and Mathematics \
at <a href=\'https://www.sdsmt.edu/\'> South Dakota School of Mines and Technology</a>. - Some of the areas that I have enjoyed working on \
cloud computing, machine learning, and application development. You can checkout my projects on \
<a href=\'https://github.com/sha5hwati\'> Github</a>! - \
When not coding, I am hiking, biking, reading, or exploring places.'

function about(){
    var textElements = me.split("-").map(function(c) {
        return $('<p>' + c + '</p>');
      });
      
      var el = $('#me');
      el.text("");
      var delay = 80; // Tune this for different letter delays.
      textElements.forEach(function(e, i) {
          el.append(e);
          e.hide();
          setTimeout(function() {
              e.fadeIn(3000)
          }, 100 + i * delay)
      }) 
}

