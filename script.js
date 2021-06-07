var numberOfDrumButtons = document.querySelectorAll(".neon-button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".neon-button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "a":
            var clap = new Audio("sounds/clap.wav");
            clap.play();
            break;

        case "s":
            var hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;

        case "d":
            var kick = new Audio('sounds/kick.wav');
            kick.play();
            break;

        case "f":
            var openhat = new Audio('sounds/openhat.wav');
            openhat.play();
            break;

        case "g":
            var boom = new Audio('sounds/boom.wav');
            boom.play();
            break;

        case "h":
            var ride = new Audio('sounds/ride.wav');
            ride.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var tom = new Audio('sounds/tom.mp3');
            tom.play();
            break;
        case "l":
            var tink = new Audio('sounds/tink.wav');
            tink.play();
            break;


        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("playing");

    setTimeout(function () {
        activeButton.classList.remove("playing");
    }, 100);

}