/* Mudar o titulo */

function alterarTitulo() {
  let titulo = document.getElementById('titulo');
  titulo.innerText = 'Título alterado com sucesso!';
  titulo.style.color = 'green';
}

/* Contagem regressiva */

let seconds = 10;
function updateCountdown() {
  const countdownElement = document.getElementById('contagem');

  if (countdownElement) {
    if (seconds > 0) {
      countdownElement.textContent = seconds + ' segundos restantes';
      seconds--;
      setTimeout(updateCountdown, 1000);
    } else {
      countdownElement.textContent = 'Tempo acabou!';
      countdownElement.style.color = 'green';
    }
  }
}

updateCountdown();

/* Formulario com erro */

document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    let isValid = true;
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      const errorMessage = input.nextElementSibling;
      if (input.value.trim() === '') {
        input.classList.add('error');
        input.classList.remove('valid');
        errorMessage.style.display = 'block';
        isValid = false;
      } else {
        input.classList.add('valid');
        input.classList.remove('error');
        errorMessage.style.display = 'none';
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });

/* Lista de tarefas (alterada para o tema da pagina) */

function addTask() {
  let input = document.getElementById('taskInput');
  let taskText = input.value.trim();

  if (taskText === '') {
    alert('Digite uma criptomoeda.');
    return;
  }

  let list = document.getElementById('taskList');
  let listItem = document.createElement('li');
  listItem.textContent = taskText;
  list.appendChild(listItem);
  input.value = '';
}

/* Trocar cor do texto */

function changeTextColor() {
  let text = document.getElementById('feedbackText');
  text.style.color = text.style.color === 'green' ? 'black' : 'green';
}
