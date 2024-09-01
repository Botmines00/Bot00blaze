javascript:(function(){const styleTag=document.createElement('style');styleTag.innerHTML=`
    .context-options {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2c3e50;
        width: 300px;
        height: 450px;
        border-radius: 12px;
        border: 2px solid #3498db;
        z-index: 9999;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }
    .title {
        color: #ffffff;
        font-size: 16px;
        font-family: Arial, sans-serif;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .title i {
        font-size: 20px;
    }
    .square-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
        width: 100%;
        height: calc(100% - 100px);
        box-sizing: border-box;
        overflow: auto;
    }
    .square {
        width: 100%;
        padding-top: 100%;
        background: linear-gradient(145deg, #ffffff, #e0e0e0);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
    }
    .square.active {
        background: url('https://jogorico.com/mines/zs.png') no-repeat center center;
        background-size: cover;
        border: 2px solid #3498db;
    }
    .hack-option {
        background-color: #3498db;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        font-family: Arial, sans-serif;
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s;
        margin-top: 16px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hack-option:hover {
        background-color: #2980b9;
    }
    .footer {
        margin-top: 16px;
        color: #ffffff;
        font-size: 14px;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    .footer i {
        margin-right: 8px;
    }
`;const fontAwesomeTag=document.createElement('link');fontAwesomeTag.rel='stylesheet';fontAwesomeTag.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';let menuDiv;let isOpen=false;squares=[];function openMenu(){if(!isOpen){menuDiv=document.createElement('div');menuDiv.classList.add('context-options');const title=document.createElement('div');title.classList.add('title');title.innerHTML='<i class="fas fa-bomb"></i> Bot 00 - Mines 🤯';const squareContainer=document.createElement('div');squareContainer.classList.add('square-container');squares=[];for(let i=0;i<25;i++){const square=document.createElement('div');square.classList.add('square');squareContainer.appendChild(square);squares.push(square);}menuDiv.appendChild(title);menuDiv.appendChild(squareContainer);const hackOption=document.createElement('button');hackOption.classList.add('hack-option');hackOption.textContent='Hackear Mines ⚙';hackOption.addEventListener('click',handleHack);const footer=document.createElement('div');footer.classList.add('footer');footer.innerHTML='<i class="fas fa-code"></i> Desenvolvido por: R.M.$';menuDiv.appendChild(hackOption);menuDiv.appendChild(footer);document.head.appendChild(fontAwesomeTag);document.body.appendChild(styleTag);document.body.appendChild(menuDiv);isOpen=true;}else{handleClose();}}function handleHack(){const numDiamonds=3;const shuffledIndices=Array.from({length:25},(_,index)=>index).sort(()=>Math.random()-0.5).slice(0,numDiamonds);squares.forEach((square,index)=>{square.classList.toggle('active',shuffledIndices.includes(index));});}function handleClose(){if(menuDiv){document.body.removeChild(menuDiv);menuDiv=null;isOpen=false;}}document.addEventListener('dblclick',openMenu);})();