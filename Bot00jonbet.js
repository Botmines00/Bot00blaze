javascript:(function() {
    const injectScript = (scriptContent) => {
        const script = document.createElement('script');
        script.innerText = scriptContent;
        document.body.appendChild(script);
    };

    const injectStyle = (styleContent) => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = styleContent;
        document.head.appendChild(styleTag);
    };

    const initContextMenu = () => {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('context-options');
        menuDiv.innerHTML = `
            <img src="https://i.postimg.cc/LXSsypHY/IMG-20240830-WA0088.jpg" />
            <span class="bot-title"><i class="fas fa-robot"></i> Bot 00 JonBet - (1️⃣0️⃣.1️⃣)</span>
            <span class="context-option closeContextOptions"><i class="fas fa-times"></i> Minimizar Menu🔛</span>
            <span class="context-option seeResult"><i class="fas fa-eye"></i>Hackear Entrada 🔄🎭</span>
            <a href="https://jon.bet/pt/games/double">> HOST: jon.bet</a><br>
            <span class="dev-by result-text"><i class="fas fa-code"></i> Resultado:</span>
        `;
        document.body.appendChild(menuDiv);

        document.querySelector('.closeContextOptions').addEventListener('click', closeMenu);
        document.querySelector('.seeResult').addEventListener('click', seeResult);

        if (window.matchMedia("(max-width: 800px)").matches) {
            document.addEventListener('dblclick', (event) => {
                event.preventDefault();
                displayContextMenu(event.clientX, event.clientY);
            });
        } else {
            document.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                displayContextMenu(event.clientX, event.clientY);
            });
        }
    };

    const displayContextMenu = (posX, posY) => {
        const contextMenu = document.querySelector('.context-options');
        contextMenu.style.top = `${posY}px`;
        contextMenu.style.left = `${posX}px`;
        contextMenu.style.display = 'unset';
    };

    const closeMenu = () => {
        const contextMenu = document.querySelector('.context-options');
        contextMenu.style.display = 'none';
    };

    const seeResult = () => {
        const rouletteSlider = document.getElementById('roulette-slider-entries');
        const resultText = document.querySelector('.result-text');
        if (rouletteSlider) {
            rouletteSlider.removeAttribute('style');
            const randValue = Math.floor(Math.random() * -2248.9) + 'px';
            rouletteSlider.style.transform = `translateX(${randValue})`;
            rouletteSlider.style.transitionDuration = '1000ms';
            rouletteSlider.style.transitionDelay = '0ms';
            if (Math.random() > 0.5) {
                resultText.innerHTML = `<i class="fas fa-check"></i> Acertou!`;
                resultText.style.color = 'green';
            } else {
                resultText.innerHTML = `<i class="fas fa-times"></i> Perdeu!`;
                resultText.style.color = 'red';
            }
        }
    };

    injectStyle(`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code&display=swap');
        .context-options {
            position: fixed;
            top: 50px;
            bottom: 0;
            left: 50px;
            right: 0;
            width: 250px;
            height: max-content;
            border: 1px solid black;
            background: #0B0E11;
            padding: 5px;
            display: none;
            z-index: 9999;
        }
        .context-options img {
            position: absolute;
            border-radius: 10px;
            width: 250px;
            top: -245px;
            left: -1px;
        }
        .context-options span.bot-title {
            color: White;
            text-align: center;
            display: block;
            font-family: 'M PLUS 1 Code', sans-serif;
            margin-bottom: 5px;
        }
        .context-options span.context-option {
            text-align: left;
            display: block;
            width: 100%;
            box-sizing: border-box;
            background: #00ff00;
            color: #000;
            padding: 5px;
            border-bottom: 1px black;
            cursor: pointer;
            font-weight: bold;
            font-size: 12px;
            font-family: 'M PLUS 1 Code', sans-serif;
            transition: .1s all;
        }
        .context-options span.context-option:hover {
            transform: scale(1.1);
        }
        .context-options span.context-option:active {
            transform: scale(1);
        }
        .closeContextOptions {
            background: #00ff00 !important;
        }
        span.dev-by {
            color: White;
            display: block;
            text-align: center;
            margin-top: 5px;
            font-family: 'M PLUS 1 Code', sans-serif;
        }
    `);

    const fafa = document.createElement('script');
    fafa.src = 'https://kit.fontawesome.com/a076d05399.js';
    fafa.setAttribute('crossorigin', 'anonymous');
    document.body.prepend(fafa);

    initContextMenu();
})();
