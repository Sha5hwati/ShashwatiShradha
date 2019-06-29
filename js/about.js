$(document).ready(function(){
    name();
    text();
}
);

function name(){
var text = 'She says Hi!';

var textElements = text.split("").map(function(c) {
  return $('<span id="' + c + '">' + c + '</span>');
});

var el = $('#title');
var delay = 80; // Tune this for different letter delays.
textElements.forEach(function(e, i) {
    el.append(e);
    e.hide();
    setTimeout(function() {
        e.fadeIn(3000)
    }, 100 + i * delay)
})
}