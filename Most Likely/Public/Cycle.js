// @input Component.Text Text
// @input string[] Questions

var currentItemIndex = 0;
var count = 0;

var event = script.createEvent("UpdateEvent");
event.bind(function (eventData){
    if (count == 0){
        currentItemIndex = Math.floor(Math.random() * (script.Questions.length + 1));
        if(currentItemIndex == 0){
            script.Text.text = script.Questions[currentItemIndex];
        }else{
            script.Text.text = script.Questions[currentItemIndex-1];
        }    
    }
});



var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = 0;
event.bind(function (eventData){
    count ++;
});

var event = script.createEvent("TapEvent");
event.bind(function(eventData){
    if(count !== 0){
        count = 0;
    }
});