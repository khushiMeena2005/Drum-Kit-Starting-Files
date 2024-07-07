alert("let's get started!");
//document.querySelector("button").addEventListener("click",handleClick);
 //document.querySelector(".set").addEventListener("click",handleClick);
 for(var i=0;i<document.querySelectorAll(".drum").length;i++)
 {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
 }
function handleClick()
{  
    
    var ButtonInnerHTML=this.innerHTML;

   makeSound(ButtonInnerHTML);
  ButtonAnimation(ButtonInnerHTML);

}
 //detecting keybord sounds
 
 document.addEventListener("keypress",function(press){
  makeSound(press.key);
  ButtonAnimation(press.key);
 });

 function makeSound(key)
 {

 switch(key)
    {
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case"j":
        var audio=new Audio("./sounds/crash.mp3");
        audio.play();
        break;
        case "k":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case"l":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        default: console.log(ButtonInnerHTML);
      
    }
}


function ButtonAnimation(curentKey)
{
    var activeButton=document.querySelector("."+curentKey);
    activeButton.classList.add("pressed");
    setTimeout( function(){
         activeButton.classList.remove("pressed");
    } , 100);
}
