// Function to play back sound files
var playSound = function(buttonText){
    switch (buttonText) {
        case "A100percent":
                var a100 = new Audio("sounds/a-100-percent.wav");
                a100.play();
            break;
    
        case "Caw":
                var a100 = new Audio("sounds/caw.wav");
                a100.play();
            break;

        case "Clearingthroat":
                var a100 = new Audio("sounds/clearing-throat.wav");
                a100.play();
            break;

        case "eEee":
                var a100 = new Audio("sounds/eEee.wav");
                a100.play();
            break;

        case "Groan":
                var a100 = new Audio("sounds/groan-1.wav");
                a100.play();
            break;

        case "Inhale-exhale":
                var a100 = new Audio("sounds/inhale-exhale.wav");
                a100.play();
            break;

        case "Loser":
                var a100 = new Audio("sounds/loser.wav");
                a100.play();
            break;

        case "mMm":
                var a100 = new Audio("sounds/mMm.wav");
                a100.play();
            break;

        case "Noo":
                var a100 = new Audio("sounds/noo.wav");
                a100.play();
            break;

        case "Okbuddy":
                var a100 = new Audio("sounds/ok-buddy.wav");
                a100.play();
            break;

        case "Reee":
                var a100 = new Audio("sounds/reee.wav");
                a100.play();
            break;

        case "Ridethewav":
                var a100 = new Audio("sounds/ride-the-wav.wav");
                a100.play();
            break;

        case "Uhhno":
                var a100 = new Audio("sounds/uhh-no.wav");
                a100.play();
            break;

        case "Watthe":
                var a100 = new Audio("sounds/wat-the.wav");
                a100.play();
            break;

        case "Wwhaat":
                var a100 = new Audio("sounds/wwhaat.wav");
                a100.play();
            break;

        default:
            console.log(buttonText);
    }
}

// Loop to add event listener to buttons
for (var i = 0; i < document.querySelectorAll(".crts-btn").length; i++){

    document.querySelectorAll(".crts-btn")[i].addEventListener("click", function(){
        
        var buttonText = this.innerText.replace(/[.?!,\s]/g,'');
        playSound(buttonText);
        buttonAnimation(buttonText)
    })

}

// Button Clicked Animation Function 
function buttonAnimation(buttonText){
    var activeButton = document.querySelector("."+buttonText);
    activeButton.classList.add("clicked");

    setTimeout(function(){
        activeButton.classList.remove("clicked");
    },100);
}