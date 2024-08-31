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
            <div class="menu-header">
                <img src="https://i.ibb.co/fMyLHr1/IMG-20240525-WA0072.jpg" />
                <span class="bot-title"><i class="fas fa-robot"></i> Bot 00 JonBet - (3️⃣6️⃣.3️⃣)</span>
                <button class="closeContextOptions"><i class="fas fa-times"></i></button>
            </div>
            <div class="menu-body">
                <span class="context-option seeResult"><i class="fas fa-eye"></i> Identificar Cor 💯✅</span>
                <a class="context-option" href="https://blaze1.space/pt/games/double"><i class="fas fa-link"></i> HOST: blaze1.space</a>
                <span class="dev-by result-text"><i class="fas fa-code"></i> Resultado:</span>
            </div>
            <div class="menu-footer">
                <span class="dev-info"><i class="fas fa-info-circle"></i> Desenvolvido por R.M.$</span>
            </div>
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
        contextMenu.style.display = 'block';
        contextMenu.classList.add('active');
    };

    const closeMenu = () => {
        const contextMenu = document.querySelector('.context-options');
        contextMenu.style.display = 'none';
        contextMenu.classList.remove('active');
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
                resultText.style.color = '#28a745';
            } else {
                resultText.innerHTML = `<i class="fas fa-times"></i> Perdeu!`;
                resultText.style.color = '#dc3545';
            }
        }
    };

    injectStyle(`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code&display=swap');
        .context-options {
            position: fixed;
            top: 30px;
            left: 20px;
            width: 250px;
            background: linear-gradient(135deg, #0B0E11, #1F2023);
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            display: none;
            z-index: 9999;
            overflow: hidden;
            font-family: 'M PLUS 1 Code', sans-serif;
            transition: transform 0.3s ease-in-out;
        }
        .context-options.active {
            transform: scale(1.05);
        }
        .menu-header {
            position: relative;
            padding: 8px;
            background: #282a36;
            border-bottom: 1px solid #444;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .menu-header img {
            width: 45px;
            border-radius: 50%;
            border: 2px solid #F20505;
        }
        .menu-header .bot-title {
            color: #fff;
            margin-left: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
        }
        .menu-header .closeContextOptions {
            background: transparent;
            border: none;
            color: #F20505;
            cursor: pointer;
            font-size: 16px;
            transition: color 0.3s, transform 0.3s;
        }
        .menu-header .closeContextOptions:hover {
            color: #dc3545;
            transform: scale(1.2);
        }
        .menu-body {
            padding: 12px;
        }
        .context-option {
            display: block;
            width: 100%;
            padding: 8px;
            margin-bottom: 8px;
            background: #F20505;
            color: #fff;
            text-align: left;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 12px;
            transition: background 0.2s ease, transform 0.3s;
        }
        .context-option:hover {
            background: #dc3545;
            transform: scale(1.05);
        }
        .menu-footer {
            background: #282a36;
            padding: 8px;
            text-align: center;
            border-top: 1px solid #444;
        }
        .menu-footer .dev-info {
            color: #bbb;
            font-size: 10px;
        }
        .result-text {
            display: block;
            margin-top: 8px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #fff;
        }
    `);

    const fafa = document.createElement('script');
    fafa.src = 'https://kit.fontawesome.com/a076d05399.js';
    fafa.setAttribute('crossorigin', 'anonymous');
    document.body.prepend(fafa);

    initContextMenu();
})();
