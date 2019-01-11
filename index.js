$(document).ready(function(){
        name();
        text();
        changeImage();
    }
);

function name(){
    var text = 'HI, I AM SHASHWATI';

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

function text() {
    var text = 'Learn more about me';    
    var el = $('#text');
    el.hide()
    el.delay(3000);
    el.append(text);
    el.fadeIn();
}

x = -1;
BackgroundIm = ["./others/beach.jpeg", "./others/background.jpg"];

function displayNextImage() {
    x = (x == BackgroundIm.length - 1) ? 0 : x + 1;
    document.getElementsByTagName("body")[0].style.backgroundImage = 'url(\"' + BackgroundIm[x] + '\")';
}

function changeImage() {
    setInterval(displayNextImage, 5000);
}



