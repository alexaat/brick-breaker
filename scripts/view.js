const scoreLable = document.querySelector('#score');
const levelLable = document.querySelector('#level');
const paddle = document.querySelector('#paddle');
const message = document.querySelector('#message');
const playBoard = document.querySelector('#board');
const ball = document.querySelector('#ball');

const brickMap = new Map();
brickMap.set("red_block", "url('../images/red_block.jpg')");
brickMap.set("blue_block", "url('../images/blue_block.jpeg')");


const renderMessage = (text) => {
    message.textContent = text;
}
const renderScore = (score) => {
    scoreLable.textContent = `Score: ${score}`;
}
const renderLevel = (level) => {
    levelLable.textContent = `Level: ${level}`;
}
export const renderPaddle = ({left, top, lives, width, height}) => {

    paddle.style.left = `${left}px`; 
    paddle.style.top = `${top}px`; 

    if(lives !== undefined){
        const img = paddle.querySelector('img');
        switch(lives){
            case 3:
                img.src='./images/paddle_2.jpg';          
                break;
            case 2:
                img.src='./images/paddle_1.jpg';            
                break;
            case 1:
                img.src='./images/paddle_0.jpg';           
                break;
        }
    }
    if(width !== undefined){
        paddle.style.width = `${width}px`;        
    }
    if(height !== undefined){
        paddle.style.height = `${height}px`;        
    }

}
export const renderBall = ({left, top, size, visibility}) => {   
    ball.style.left = `${left}px`; 
    ball.style.top = `${top}px`;

    if(size !== undefined){
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
    }

    if(visibility!== undefined){
        if(visibility === true){
            ball.style.display = 'block';
        }else if (visibility === false){
            ball.style.display = 'none';
        }
    }  
}

export const renderPlayBoard = (width, height) => {
    playBoard.style.width = `${width}px`;
    playBoard.style.height = `${height}px`;
}

export const renderBlock = (block) => {
    let div = document.createElement('div');
    div.classList.add('wall-block');
    div.style.width = `${block.width}px`;
    div.style.height = `${block.height}px`;
    div.style.left = `${block.left}px`;
    div.style.top = `${block.top}px`;
    div.style.backgroundImage = brickMap.get(block.type);
    playBoard.appendChild(div);
}



