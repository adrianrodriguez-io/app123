// Elementos del DOM
const registerButton = document.getElementById('register-button');
const counterDisplay = document.getElementById('counter');
const historyList = document.getElementById('history-list');

// Variables
let counter = 0;
let history = [];

// Registrar cigarrillo
registerButton.addEventListener('click', () => {
  const now = new Date();
  const time = now.toLocaleTimeString();

  // Incrementar contador
  counter++;
  counterDisplay.textContent = counter;

  // Actualizar historial
  history.push({ time });
  updateHistory();
});

// Actualizar historial en pantalla
function updateHistory() {
  historyList.innerHTML = '';
  history.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Cigarro ${index + 1}: ${entry.time}`;
    historyList.appendChild(listItem);
  });
}

// Función para guardar datos en LocalStorage
function saveData() {
  localStorage.setItem('counter', counter);
  localStorage.setItem('history', JSON.stringify(history));
}

// Función para cargar datos de LocalStorage
function loadData() {
  counter = parseInt(localStorage.getItem('counter')) || 0;
  history = JSON.parse(localStorage.getItem('history')) || [];
  counterDisplay.textContent = counter;
  updateHistory();
}

// Guardar datos al cerrar la ventana
window.addEventListener('beforeunload', saveData);

// Cargar datos al iniciar
loadData();
