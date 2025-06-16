import randomPokemon from './api';

function App() {
  console.log(randomPokemon());
  return (
    <>
      <h1>Adivina el pokemon</h1>
      console.log(randomPokemon())
    </>
  );
}

export default App;
