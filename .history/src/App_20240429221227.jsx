import randomPokemon from './api';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(randomPokemon());

  console.log(randomPokemon());
  return (
    <>
      <h1>Adivina el pokemon</h1>
      {pokemon && (
        <main>
          <img className="w-96 h-96" src={pokemon.image} />
          <input></input>
          <button>Comprobar</button>
        </main>
      )}
    </>
  );
}

export default App;
