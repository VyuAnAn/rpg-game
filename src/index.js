import { io } from 'socket.io-client';
import './index.scss';
import ClientGame from './client/ClientGame';
import { getTime } from './common/util';

window.addEventListener('load', () => {
  const socket = io('https://jsprochat.herokuapp.com');
  const $startGame = document.querySelector('.start-game');
  const $nameForm = document.getElementById('nameForm');
  const $inputName = document.getElementById('name');
  const $message = document.querySelector('.message');

  const $chatWrap = document.querySelector('.chat-wrap');
  const $form = document.getElementById('form');
  const $input = document.getElementById('input');

  const submitName = (event) => {
    event.preventDefault();

    if ($inputName.value) {
      ClientGame.init({
        tagId: 'game',
        playerName: $inputName.value,
      });

      socket.emit('start', $inputName.value, $inputName.value);

      $chatWrap.style.display = 'block';
      $nameForm.removeEventListener('submit', submitName);
      $startGame.remove();
    }
  };
  $nameForm.addEventListener('submit', submitName);

  $form.addEventListener('submit', (event) => {
    event.preventDefault();

    if ($input.value) {
      socket.emit('chat message', $input.value);
      $input.value = '';
    }
  });

  socket.on('chat connection', (data) => {
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat disconnect', (data) => {
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat message', (data) => {
    console.log('chat message', socket.id, data);
    if (socket.id === data.id) {
      $message.insertAdjacentHTML(
        'beforeend',
        `<p style="color: #c8a2c8"><strong>${getTime(data.time)}</strong> - ${data.name}: ${data.msg}</p>`,
      );
    } else {
      $message.insertAdjacentHTML(
        'beforeend',
        `<p><strong>${getTime(data.time)}</strong> - ${data.name}: ${data.msg}</p>`,
      );
    }
  });

  socket.on('chat online', (data) => {
    console.log('chat online', data);
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> Online: ${data.online}</p>`);
  });
});
