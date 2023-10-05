export default function createGameForm(title, btnText) {
  const formPositionContainer = document.createElement('div');
  const formWrapper = document.createElement('div');
  const formTitle = document.createElement('h3');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const resetFormHandler = () => {
    formPositionContainer.classList.remove('popup--active');
    button.disabled = true;
  };
  const inputHandler = () => {
    input.value ? (button.disabled = false) : (button.disabled = true);
  };

  formPositionContainer.classList.add('popup', 'flex', 'popup--active');
  formWrapper.classList.add('popup__wrapper', 'flex', 'popup--active');
  formWrapper.setAttribute('id', 'popup__wrapper');
  formTitle.classList.add('form-title');
  formTitle.textContent = title;
  form.classList.add('form', 'flex');
  input.classList.add('input');
  input.type = 'number';
  input.placeholder = 'Четное число от 2 до 10';
  parseInt(input.value);
  input.addEventListener('input', inputHandler);
  button.classList.add('btn');
  button.textContent = btnText;
  button.setAttribute('id', 'popup__btn');
  button.disabled = true;
  button.addEventListener('click', resetFormHandler);
  form.append(input);
  form.append(button);
  formWrapper.append(formTitle);
  formWrapper.append(form);
  formPositionContainer.append(formWrapper);

  return { formPositionContainer, input, button };
}
