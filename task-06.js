/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

1/знайти в документі інпут 
2/написати зовнішню функцію:
щоб була перевірка і змінювати класи
3/додатм івент
*/

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
