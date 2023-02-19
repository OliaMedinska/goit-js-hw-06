const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputElInput = (event) => {
    if (inputEl.value === '') {
        return (spanEl.textContent = 'Anonymous');
    }
    spanEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', onInputElInput );


