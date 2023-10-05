export default function createGameTimer(container, countdown, callback) {
  const gameTimer = document.createElement('div');
  let counter = countdown;
  const timerCountdown = () => {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;

    minutes = '0' + minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    gameTimer.textContent = `${minutes}:${seconds}`;

    counter--;

    if (counter < 10) {
      gameTimer.classList.add('timer--danger');
    }
    if (counter < 0) {
      gameTimer.textContent = 'Время вышло';
      clearInterval(timer);
      callback(container);
    }
    if (document.querySelectorAll('.is-hidden').length === 0) {
      gameTimer.classList.add('timer--success');
      gameTimer.textContent = 'Победа';

      clearInterval(timer);
      callback(container);
    }
  };
  const timer = setInterval(timerCountdown, 1000);

  gameTimer.classList.add('timer', 'flex');
  gameTimer.textContent = '01:00';
  container.append(gameTimer);

  return gameTimer;
}
