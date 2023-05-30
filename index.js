
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    var buttonp;
document.querySelectorAll("button")[i].addEventListener("click", doit)




function doit(){
buttonp=this.innerHTML;
sounds();
anime();
}
}



document.addEventListener("keypress", function(bla){

   buttonp= bla.key;
    sounds()
    anime();
     });
    
  
     

function sounds()
{


      
    switch (buttonp) {
        case "w":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            
            break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                
                break;
                case "d":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    
                    break;
                    case "j":
                        var audio = new Audio('sounds/tom-1.mp3');
                        audio.play();
                        
                        break;
                        case "k":
                            var audio = new Audio('sounds/tom-2.mp3');
                            audio.play();
                            
                            break; 
                            
                            case "l":
                            var audio = new Audio('sounds/tom-3.mp3');
                            audio.play();
                            
                            break;
                              
                            case "s":
                            var audio = new Audio('sounds/tom-4.mp3');
                            audio.play();
                            
                            break;
    
        default: console.log("hehehe")
            break;
    }
    
}


function  anime(){
   var hehehee=  document.querySelector("."+buttonp).classList.add("press")
   setTimeout(function() {
    var hehehee=  document.querySelector("."+buttonp).classList.remove("press")

   } ,150  )
    }
    
