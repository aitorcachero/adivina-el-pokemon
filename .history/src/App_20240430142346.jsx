import randomPokemon from './api';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(randomPokemon());
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-slate-800 p-10 rounded-lg mt-20 blur-sm">
        <h1>Adivina el pokemon</h1>
        {pokemon && (
          <>
            <main className="w-96 h-96 relative">
              <img
                className="w-full h-full"
                style={{
                  filter: `${
                    show ? 'brightness(100%)' : 'brightness(0%) contrast(0%)'
                  }`,
                }}
                src={pokemon.image}
              ></img>
              <div className="absolute w-full h-full inset-0 "></div>
            </main>

            <form className="flex flex-row gap-6 z-10">
              <input />
              <button type="button" onClick={() => setShow(true)}>
                Comprobar
              </button>
            </form>

            {show && (
              <h1 className="text-center text-6xl font-extrabold mt-10">
                {pokemon.name}
              </h1>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
