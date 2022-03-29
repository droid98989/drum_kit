var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

// Detecting button press
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    var buttonClick = this.innerHTML;
    makeSound(buttonClick);
    buttonAnimation(buttonClick)
  }
}

// Detecting keyboard press
  document.addEventListener("keydown", presser);
  function presser(event) {
    makeSound(event.key);
    buttonAnimation(event.key)
  }


function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
