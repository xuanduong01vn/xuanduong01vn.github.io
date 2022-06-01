dragAct=document.querySelector('.drag-action');
hammerAct= document.querySelector('.hammer-action');
bagAct=document.querySelector('.bag-action');
playerImg=document.querySelector('#player-img');
botImg=document.querySelector('#bot-img');
messageContent=document.querySelector('.message-content');

function botRandom(){
    return `./images/${Math.floor(Math.random()*3)+1}.png`;
}

function fade(){
    messageContent.style.opacity='1'
}

dragAct.onclick= ()=>{
    playerImg.setAttribute('src','./images/1.png');
    botImg.setAttribute('src',botRandom());
    fade()
    if(botImg.getAttribute('src')=='./images/1.png'){
        messageContent.innerText='DRAW';
    }
    else if(botImg.getAttribute('src')=='./images/2.png'){
        messageContent.innerText='LOSE';
    }
    else if(botImg.getAttribute('src')=='./images/3.png'){
        messageContent.innerText='WIN';
    }
}

hammerAct.onclick= ()=>{
    playerImg.setAttribute('src','./images/2.png');
    botImg.setAttribute('src',botRandom());
    fade() 
    if(botImg.getAttribute('src')=='./images/1.png'){
        messageContent.innerText='WIN';
    }
    else if(botImg.getAttribute('src')=='./images/2.png'){
        messageContent.innerText='DRAW';
    }
    else if(botImg.getAttribute('src')=='./images/3.png'){
        messageContent.innerText='LOSE';
    }
}
bagAct.onclick= ()=>{
    playerImg.setAttribute('src','./images/3.png');
    botImg.setAttribute('src',botRandom());
    fade()
    if(botImg.getAttribute('src')=='./images/1.png'){
        messageContent.innerText='LOSE';
    }
    else if(botImg.getAttribute('src')=='./images/2.png'){
        messageContent.innerText='WIN';
    }
    else if(botImg.getAttribute('src')=='./images/3.png'){
        messageContent.innerText='DRAW';
    }
}

    






