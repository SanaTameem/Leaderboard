const createScore = (array, container) => {
  array.forEach((person) => {
    const element = document.createElement('p');
    element.classList.add('scores-text');
    element.textContent = `${person.name} : ${person.score}`;
    container.appendChild(element);
  });
};
export default createScore;