const corpo = document.querySelector('body');
const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Adivinhe a Cor!';
corpo.appendChild(title);

const section = document.createElement('section');
corpo.appendChild(section);


const rgbText = document.createElement('h3');
rgbText.className = 'rgb-random'
section.appendChild(rgbText);

const placar = document.createElement('h4');
placar.innerText = 'Placar';
section.appendChild(placar);

const divColor = document.createElement('div');
divColor.className ='ball-cores';
section.appendChild(divColor);



function criarBolas(quantidade, className) {
    for (let i = 0; i < quantidade; i += 1) {
        let box = document.createElement('div');
        box.className = className;
        box.style.backgroundColor = generateColor();
        divColor.appendChild(box)
    }
}
criarBolas(6, 'ball');

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
generateColor();

const pergunta = document.createElement('h3');
pergunta.id = 'answer';
pergunta.innerText = 'Escolha uma cor';
section.appendChild(pergunta);


function getRandomColor() {
    const colorBalls = document.querySelectorAll('.ball');
    const pergunta = document.querySelector('#answer')
    const randomRgb = document.querySelector('.rgb-random');
    for (let i = 0; i < colorBalls.length; i++) {
        let balls = colorBalls[Math.floor(Math.random() * colorBalls.length)].style.backgroundColor;
        randomRgb.innerText = balls;
        colorBalls[i].addEventListener('click', function () {
            if (randomRgb.innerText === colorBalls[i].style.backgroundColor) {
                pergunta.innerText = 'Acertou'
            }
            else {
                pergunta.innerText = 'Errou!';
            }
        })
    };
};
getRandomColor();

const resetButton = document.createElement('button');
resetButton.id = 'reset-game';
resetButton.innerText = 'Resetar Jogo/Cores!'
section.appendChild(resetButton);

resetButton.addEventListener('click', function() {
    divColor.innerHTML='';
    criarBolas(6, 'ball')
})