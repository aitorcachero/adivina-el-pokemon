import randomPokemon from './api';

function App() {
  const [pokemon, setPokemon] = useState(randomPokemon());

  console.log(pokemon);
  return (
    <>
      <h1>Adivina el pokemon</h1>
      {pokemon && (
        <main>
          <img>{pokemon}</img>
          <input></input>
          <button>Comprobar</button>
        </main>
      )}
    </>
  );
}

export default App;
