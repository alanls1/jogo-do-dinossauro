const dino = document.querySelector(".dino");
const backGround = document.querySelector('.background')
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
       if(!isJumping){
        jump();
        }
    }
}
function jump(){
     

    isJumping= true;

    let upInterval = setInterval(() => {
        if(position >= 200){
            clearInterval(upInterval)
            //descendo

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping=false;
                }else {
                position -= 20; 
                dino.style.bottom = position +"px";
                }
                
            },20 );
        }
        //subindo
        position += 20;
        dino.style.bottom = position +"px";
    },20 );
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1800;
    let randomTime = Math.random() * 6000; 

    cactus.classList.add('cactus');
    cactus.style.left = 1800 + "px";
    backGround.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + "px";

        if( cactusPosition < -60){
            clearInterval(leftInterval);
            backGround.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    },20 );
    setTimeout(createCactus, randomTime ,1);
}

createCactus();
document.addEventListener('keyup',handleKeyUp);