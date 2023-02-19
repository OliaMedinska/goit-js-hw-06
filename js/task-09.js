const colorValue = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChanceColorBtnClick = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}; 

changeColorBtn.addEventListener('click', onChanceColorBtnClick);

