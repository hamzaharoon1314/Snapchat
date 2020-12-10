// @input Component.Text Text


// Variables
var reset = false;
var currentIndex = 0

var alphabet = [], i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);
for(; i <= j; ++i){
    alphabet.push(String.fromCharCode(i));
}

var event = script.createEvent("UpdateEvent");
event.bind(function (eventData){
    if(!reset){
        currentIndex += 1;
        currentIndex = currentIndex % alphabet.length;
        script.Text.text = alphabet[currentIndex].toUpperCase();
    }
});
script.createEvent("MouthOpenedEvent").bind(function(eventData){
    reset = true;
})

script.createEvent("TapEvent").bind(function(eventData){
   if(reset){
        reset = false
    } 
});