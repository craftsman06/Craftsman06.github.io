var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("header");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value ="";
});