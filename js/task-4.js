const form = document.querySelector('.login-form');

form.addEventListener('submit', formFoo);

function formFoo(event) {
  event.preventDefault();

  const emailValue = event.target.elements.email.value.trim();

  const passwordValue = event.target.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(info);

  form.reset();
}
