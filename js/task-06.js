const inputValue = document.querySelector('#validation-input');

const onInputValueBlur = (event) => {
    if (inputValue.value.length === Number(inputValue.dataset.length)) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    } else {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
};

inputValue.addEventListener('blur', onInputValueBlur);
