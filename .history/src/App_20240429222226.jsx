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
              className="w-full h-full opacity-5 "
              style={{ filter: 'drop-shadow(10px 0 10px rgba(0,0,0.2))' }}
              src={pokemon.image}
            ></img>
            <div className="absolute w-full h-full inset-0 "></div>
          </main>
          <input></input>
          <button>Comprobar</button>
        </>
      )}
    </>
  );
}

export default App;
