for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    var buttonList=document.querySelectorAll(".drum")
    buttonList[i].addEventListener("click",function(){
        var soundName= this.innerHTML;
        soundPlayer(soundName);
        buttonAnimation(soundName);
    });
}

document.addEventListener("keydown",function(e){
    soundName= e.key.toLocaleLowerCase()
    soundPlayer(soundName);
    buttonAnimation(soundName);
})

function soundPlayer(key){
    switch (key) {
        case "w":
            var wSound= new Audio("sounds/crash.mp3");
            wSound.play();
            break;
        case "a":
            var aSound= new Audio("sounds/kick-bass.mp3");
            aSound.play();
            break;    
        case "s":
            var sSound= new Audio("sounds/snare.mp3");
            sSound.play();
            break;
        case "d":
            var dSound= new Audio("sounds/tom-1.mp3");
            dSound.play();
            break;    
        case "j":
            var jSound= new Audio("sounds/tom-2.mp3");
            jSound.play();
            break;    
        case "k":
            var kSound= new Audio("sounds/tom-3.mp3");
            kSound.play();
            break;    
        case "l":
            var lSound= new Audio("sounds/tom-4.mp3");
            lSound.play();
            break;        
        default:
            console.log(soundName);
            break;
    }
}

function buttonAnimation(currentbutton){
    var selectedButton= document.querySelector("."+currentbutton);
    selectedButton.classList.add("pressed")
    setTimeout( function(){selectedButton.classList.remove("pressed")} ,100)
}


