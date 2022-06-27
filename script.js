// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseleave",function() {
//       console.log("You click me !")
// })



var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul    = document.querySelector("ul");

function inputlength() {
     return input.value.length;
}

function forButton() {
     if(inputlength() > 0) {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(input.value));
          ul.appendChild(li)
          input.value = ""
         }
}

button.addEventListener("click",function(){
   forButton()
})  


function forInput() {
     if(inputlength() > 0 && event.keyCode === 13) {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(input.value));
          ul.appendChild(li)
          input.value = ""
         }
}

input.addEventListener("keypress",function(){
    forInput()
})

















