shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

shuffleQuestions = (data) => {
  const shuffled = shuffleArray(data);
  const questions = shuffled.slice(0, 10);
  return questions;
};

module.exports = {
  shuffleArray,
  shuffleQuestions,
};
