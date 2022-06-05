const colorRgb = document.querySelector('#rgb-color');
const containerBall = document.querySelector('#container-ball');
const answerText = document.querySelector('#answer');
const button = document.querySelector('#reset-game');

function createBalls(quantidade, className) {
  for (let i = 0; i < quantidade; i += 1) {
    const balls = document.createElement('div');
    balls.className = className;
    balls.style.backgroundColor = generateColor();
    containerBall.appendChild(balls);
  }
}
createBalls(6, 'ball');

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
generateColor();
//
function getRandomColor() {
  const ballRandom = document.querySelectorAll('.ball');
  for (let i = 0; i < ballRandom.length; i++) {
    const ballsTwo = ballRandom[Math.floor(Math.random() * ballRandom.length)].style.backgroundColor;
    colorRgb.innerText = ballsTwo;
  }
}
getRandomColor();

function compare() {
  const ballText = document.querySelectorAll('.ball');
  const pergunta = document.querySelector('#answer');
  const randomRgb = document.querySelector('#rgb-color');
  for (let i = 0; i < ballText.length; i += 1) {
    ballText[i].addEventListener('click', () => {
      if (randomRgb.innerText === ballText[i].style.backgroundColor) {
        pergunta.innerText = 'Acertou!';
      }
      if (randomRgb.innerText !== ballText[i].style.backgroundColor) {
        pergunta.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
compare();

function score() {
  const ballText = document.querySelectorAll('.ball');
  const pergunta = document.querySelector('#answer');
  let scoreValue = 0;
  for (let i = 0; i < ballText.length; i += 1) {
    ballText[i].addEventListener('click', () => {
      if (pergunta.innerText === 'Acertou!') {
        document.querySelector('#score').innerText = scoreValue += 3;
      }
    });
  }
}
score();

function newScore () {
  const ballText2 = document.querySelectorAll('.ball');
  const pergunta2 = document.querySelector('#answer');
  let newPoint = parseInt(document.querySelector('#score').innerText)
  for (let i = 0; i < ballText2.length; i += 1) {
    ballText2[i].addEventListener('click', () => {
      if (pergunta2.innerText === 'Acertou!') {
      document.querySelector('#score').innerText = newPoint += 3;
      }
    });
  }
}

function clearContainer() {
  containerBall.innerHTML = '';
}

button.addEventListener('click', () => {
  clearContainer();
  createBalls(6, 'ball');
  answerText.innerText = 'Escolha uma cor';
  getRandomColor();
  compare();
  newScore();
});
