import getScores from './get.js';
import sortedArr from './sortedArr.js';

const scoreDiv = async () => {
  const allScores = await getScores();
  const sorted = sortedArr(allScores);
  const scoreContainer = document.querySelector('.scores-list');
  scoreContainer.innerHTML = '';
  for (let i = 0; i < sorted.length; i += 1) {
    const para = document.createElement('p');
    para.classList.add('scores-text');
    para.textContent = `${sorted[i].user} : ${sorted[i].score}`;
    scoreContainer.appendChild(para);
  }
};

export default scoreDiv;
