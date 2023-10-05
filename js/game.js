import AmazingCard from './card.js';
import createGameForm from './game-form.js';
import createGameTimer from './game-timer.js';

const appContainer = document.getElementById('app');
let firstCard = null;
let secondCard = null;

function createCards(number) {
  const cards = [];
  for (let i = 1; i <= number / 2; i++) {
    cards.push(i, i);
  }

  return cards;
}

function shuffleCards(cards) {
  cards.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });

  return cards;
}

function createGameTitle(container, text) {
  const titleWrapper = document.createElement('div');
  const title = document.createElement('h1');

  titleWrapper.classList.add('flex', 'title-align');
  title.classList.add('title-h1');
  title.textContent = text;
  titleWrapper.append(title);
  container.append(titleWrapper);

  return { titleWrapper };
}

function createCardContainer(container) {
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cardslist', 'flex');
  container.append(cardsContainer);

  return cardsContainer;
}

function renderCards(container, cards, callback) {
  for (const cardNumber of cards) {
    new AmazingCard(container, cardNumber, callback);
  }
}

function flip(card) {
  if (firstCard != null && secondCard != null) {
    if (firstCard.cardNumber.src != secondCard.cardNumber.src) {
      firstCard.isOpen = false;
      secondCard.isOpen = false;
      firstCard = null;
      secondCard = null;
    }
  }
  if (firstCard === null) {
    firstCard = card;
  } else if (secondCard === null) {
    secondCard = card;
  }
  if (firstCard !== null && secondCard !== null) {
    if (firstCard.cardNumber.src == secondCard.cardNumber.src) {
      firstCard.isOpen = true;
      secondCard.isOpen = true;
      firstCard = null;
      secondCard = null;
    }
  }
}

function setCardsGridSize(containerClass, cardClass) {
  const cardsContainer = document.querySelector('.cardslist');
  const cards = document.querySelectorAll('.card');
  cardsContainer.classList.add(containerClass);
  cards.forEach((card) => {
    card.classList.add(cardClass);
  });
}

function newGameBtn(container) {
  const button = document.createElement('button');
  const btnClickHandler = () => {
    container.innerHTML = '';
    runGame();
  };

  button.classList.add('btn');
  button.textContent = 'Новая игра';
  button.addEventListener('click', btnClickHandler);
  container.append(button);
}

function createGame(container, number) {
  const cards = createCards(number);
  const shuffledCards = shuffleCards(cards);
  createGameTimer(appContainer, 60, newGameBtn);
  const cardsContainer = createCardContainer(container);
  renderCards(cardsContainer, shuffledCards, flip);
}

function gameForm(container) {
  const gameForm = createGameForm(
    'Количество карточек по вертикали/горизонтали',
    'Начать игру'
  );

  const gameFormSubmitHandler = (e) => {
    e.preventDefault();
    container.innerHTML = '';
    const inputValue = parseInt(gameForm.input.value);
    switch (inputValue) {
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
        createGame(container, Math.pow(inputValue, 2));
        setCardsGridSize(`cardslist--${inputValue}`, `card--${inputValue}`);
        break;

      default:
        if (inputValue % 2 === 0 && inputValue <= 10) {
          setCardsGridSize('cardslist--4', 'card--4');
        } else {
          createGame(container, 16);
          setCardsGridSize('cardslist--4', 'card--4');
        }
        break;
    }
  };

  gameForm.button.addEventListener('click', gameFormSubmitHandler);
  container.append(gameForm.formPositionContainer);
}

function runGame() {
  createGameTitle(appContainer, 'Игра в пары');
  gameForm(appContainer);
}

runGame();
