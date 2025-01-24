var size = document.querySelectorAll(".drum").length;
for(var i = 0; i < size; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
    }
    document.addEventListener("keydown", function(event){
        makesound(event.key);
        animation(event.key);
    });
    function makesound(key){
        switch (key){
            case 'w':
                var sound = new Audio("sounds/1_moan.mp3");
                sound.play(); 
                break;
            
            case 'a':
                var sound = new Audio("sounds/2_moan.mp3");
                sound.play();
                break;
            
            case 's':
                var sound = new Audio("sounds/3_moan.mp3");
                sound.play(); 
                break;
            
            case 'd':
                var sound = new Audio("sounds/4_moan.mp3");
                sound.play(); 
                break;
            
            case 'j':
                var sound = new Audio("sounds/5_moan.mp3");
                sound.play(); 
                break;
            
            case 'k':
                var sound = new Audio("sounds/5_moan.mp3");
                sound.play(); 
                break;
            
            case 'l':
                var sound = new Audio("sounds/1_moan.mp3");
                sound.play(); 
                break;

            default:// console.log(buttonInnerHTML);
            
        }

    }
    function animation(currentKey){
        var active = document.querySelector("." + currentKey);

        active.classList.add("pressed");

        setTimeout( function() {
            active.classList.remove("pressed");
        }, 100);
    }

