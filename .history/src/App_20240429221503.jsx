import randomPokemon from './api';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(randomPokemon());

  console.log(randomPokemon());
  return (
    <>
      <h1>Adivina el pokemon</h1>
      {pokemon && (
        <>
          <main className="w-96 h-96 relative">
            <img
              className="abolute w-full h-full top-0 opacity-50"
              src={pokemon.image}
            ></img>
            <div className="abolute w-full h-full top-0 opacity-50"></div>
          </main>
          <input></input>
          <button>Comprobar</button>
        </>
      )}
    </>
  );
}

export default App;
