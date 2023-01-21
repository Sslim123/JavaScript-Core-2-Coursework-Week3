let timeRemaining = document.querySelector("#timeRemaining");
  let set1 = document.querySelector("#alarmSet");
  let setSpan = document.querySelector("#setSpan");

 //let theTimer;
// DO NOT EDIT BELOW HERE
var count;

var audio = new Audio("alarmsound.mp3");
function setup() {
   document.getElementById("set").addEventListener("click", () => {
     theTimer =   setInterval( function(){
       count = set1.value-= 1; 
       //set1.value = "";
       setSpan.textContent = count;
       if(count <=  0){
         clearInterval(theTimer, count);
         playAlarm();
        }
     }, 1000);
  }); 
  document.getElementById("stop").addEventListener("click", () => {
      clearInterval(theTimer);
     pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
