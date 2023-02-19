const colorValue = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChanceColorBtnClick = () => {
  body.style.backgroundColor = getRandomHexColor(),
  colorValue.textContent = body.style.backgroundColor
}; 

changeColorBtn.addEventListener('click', onChanceColorBtnClick);

