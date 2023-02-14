// let length = document.querySelectorAll(".drum").length;

// for(let i =0 ; i< length ;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("hello");
//     });
// }

document.querySelectorAll(".drum").forEach((x) => {
    x.addEventListener("click", function () {
        let buttonValue = this.innerHTML;
        makeSound(buttonValue);
        buttonAnimation(buttonValue);
    });


});


document.addEventListener("keydown", function (event) {
    let keyValue = event.key;
    makeSound(keyValue);
    buttonAnimation(keyValue);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3")
            snare.play();
        case "k":
            let kick = new Audio("./sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        default:
            break;
    }

}

function buttonAnimation(currentKey){
    let animation=document.querySelector("."+currentKey);
    animation.classList.add("pressed");
    setTimeout(function(){
        animation.classList.remove("pressed");
    },100);

}