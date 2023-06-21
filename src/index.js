import './style.css';
import createScore from './modules/createScore.js';
import isNumeric from './modules/onlyNumber.js';
import setTolocalStorage from './modules/storage.js';

const alertSpan = document.querySelector('.alert');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const submitBtn = document.querySelector('.submit-btn');
const scoreContainer = document.querySelector('.scores-list');
const arrayOfScores = JSON.parse(localStorage.getItem('arrayOfScores')) || [];

const addScore = () => {
  if (nameInput.value && scoreInput.value) {
    if (isNumeric(scoreInput.value)) {
      // object
      const score = {
        name: nameInput.value,
        score: scoreInput.value,
      };
        // making the container empty
      scoreContainer.innerHTML = '';
      // push to array
      arrayOfScores.unshift(score);
      // calling create function
      createScore(arrayOfScores, scoreContainer);
      // add to local storage
      setTolocalStorage(arrayOfScores);
      // empty the input fields
      nameInput.value = '';
      scoreInput.value = '';
    } else {
      alertSpan.textContent = 'Score only accept numbers';
      alertSpan.style.display = 'flex';
      setTimeout(() => {
        alertSpan.style.display = 'none';
      }, 1000);
      scoreInput.value = '';
    }
  }
};

// event listeners
submitBtn.addEventListener('click', addScore);
document.addEventListener('DOMContentLoaded', createScore(arrayOfScores, scoreContainer));
