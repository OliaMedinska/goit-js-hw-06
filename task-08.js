const form = document.querySelector(".login-form");

const onFormSubmit = event => {
  event.preventDefault();
  const { elements: { email, password }
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заповніть пусті поля форми');
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);