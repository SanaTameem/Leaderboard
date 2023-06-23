import './style.css';
import postScore from './modules/post.js';
import isNumeric from './modules/onlyNumber.js';
import scoreDiv from './modules/loadData.js';

const alertSpan = document.querySelector('.alert');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const form = document.querySelector('.add-score-form');
const refresh = document.querySelector('.refresh-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput && scoreInput) {
    if (isNumeric(scoreInput.value)) {
      postScore(nameInput.value, scoreInput.value);
      form.reset();
    } else {
      alertSpan.textContent = 'Please write a valid Name and Score';
      alertSpan.style.display = 'flex';
      setTimeout(() => {
        alertSpan.style.display = 'none';
      }, 3000);
      scoreInput.value = '';
    }
  }
});

refresh.addEventListener('click', scoreDiv);
