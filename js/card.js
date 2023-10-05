class Card {
  constructor(container, cardNumber, callback) {
    this.container = container;
    this.cardNumber = cardNumber;
    this.callback = callback;
    this.isOpen = false;
    this.isSuccess = false;
    this.createCard();
  }

  createCard() {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.textContent = this.cardNumber;
    this.card.addEventListener('click', () => {
      if (this.isOpen === false && this.isSuccess === false) {
        this.isOpen = true;
        this.callback(this);
      } else if (this.isOpen === true && this.isSuccess === false) {
        this.callback(this);
      }
    });

    this.container.append(this.card);
  }

  set cardNumber(value) {
    this._number = value;
  }
  get cardNumber() {
    return this._number;
  }

  set isOpen(value) {
    this._isOpen = value;
    if (this.card) {
      value
        ? this.card.classList.add('open')
        : this.card.classList.remove('open');
    }
  }
  get isOpen() {
    return this._isOpen;
  }

  set isSuccess(value) {
    this._isSuccess = value;
    if (this.card) {
      value
        ? this.card.classList.add('success')
        : this.card.classList.remove('success');
    }
  }
  get isSuccess() {
    return this._isSuccess;
  }
}

export default class AmazingCard extends Card {
  constructor(container, cardNumber, callback) {
    super(container, cardNumber, callback);
    this.setDefaultImage();
  }

  createCard() {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.appendChild(this.cardNumber);
    this.card.addEventListener('click', () => {
      if (this.isOpen === false) {
        this.isOpen = true;
        this.callback(this);
      }
    });

    this.container.append(this.card);
  }

  setDefaultImage() {
    const defaultImageUrl = './img/default.jpg';
    this.cardNumber.onerror = () => {
      this.cardNumber.src = defaultImageUrl;
      throw new Error('Ошибка загрузки изображения');
    };
  }

  set cardNumber(value) {
    const cardsImg = [
      './img/1.jpg',
      './img/2.jpg',
      './img/3.jpg',
      './img/4.jpg',
      './img/5.jpg',
      './img/6.jpg',
      './img/7.jpg',
      './img/8.jpg',
      './img/9.jpg',
      './img/10.jpg',
      './img/11.jpg',
      './img/12.jpg',
      './img/13.jpg',
      './img/14.jpg',
      './img/15.jpg',
      './img/16.jpg',
      './img/17.jpg',
      './img/18.jpg',
      './img/19.jpg',
      './img/20.jpg',
      './img/21.jpg',
      './img/22.jpg',
      './img/23.jpg',
      './img/24.jpg',
      './img/25.jpg',
      './img/26.jpg',
      './img/27.jpg',
      './img/28.jpg',
      './img/29.jpg',
      './img/30.jpg',
      './img/31.jpg',
      './img/32.jpg',
      './img/33.jpg',
      './img/34.jpg',
      './img/35.jpg',
      './img/36.jpg',
      './img/37.jpg',
      './img/38.jpg',
      './img/39.jpg',
      './img/40.jpg',
      './img/41.jpg',
      './img/42.jpg',
      './img/43.jpg',
      './img/44.jpg',
      './img/45.jpg',
      './img/46.jpg',
      './img/47.jpg',
      './img/48.jpg',
      './img/49.jpg',
      './img/50.jpg',
    ];
    const img = document.createElement('img');
    img.classList.add('is-hidden');
    img.src = cardsImg[value - 1];

    this._cardNumber = img;
    this._cardNumber.onerror = () => {
      alert('Ошибка загрузки' + this._cardNumber.src);
    };
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set isOpen(value) {
    this._isOpen = value;
    if (this.card) {
      value
        ? this.cardNumber.classList.remove('is-hidden')
        : this.cardNumber.classList.add('is-hidden');
    }
  }
  get isOpen() {
    return this._isOpen;
  }
}
