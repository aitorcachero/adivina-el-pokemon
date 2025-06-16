export default function scoreHandler(result, score) {
  const newScore = { ...score };
  result === 'good'
    ? (newScore.good = newScore.good + 1)
    : (newScore.fail = newScore.fail + 1);
  localStorage.setItem('adivinaElPokemon', JSON.stringify(newScore));
  return newScore;
}
