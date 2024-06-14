const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = messageInput.value;
  socket.emit('chat message', message);
  messageInput.value = '';
});

socket.on('chat message', (message) => {
  const listItem = document.createElement('li');
  listItem.textContent = message;
  messageList.appendChild(listItem);
  messageList.scrollTop = messageList.scrollHeight; // Auto-scroll to bottom
});
