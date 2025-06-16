import randomPokemon from '../api';
import winSound from '../assets/aplausos.mp3';
import failSound from '../assets/fail-sound.mp3';
import { useState, useRef, useEffect } from 'react';
import checkName from '../utils/checkName';
import ConfettiEffect from './ConfettiEffect';
import Score from './Score';
import scoreHandler from '../utils/scoreHandler';

export default function Game() {
  const [pokemon, setPokemon] = useState(randomPokemon());
  const [show, setShow] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const [winner, setWinner] = useState(false);
  const [audio, setAudio] = useState(false);
  const [score, setScore] = useState({ good: 0, fail: 0 });
  const [inputValue, setInputValue] = useState('');

  const refColor = useRef();

  useEffect(() => {
    const getHistory = localStorage.getItem('adivinaElPokemon');
    if (getHistory) setScore(JSON.parse(getHistory));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const inputText = inputValue.trim();
    if (inputText === '') return;

    if (checkName(inputText, pokemon.name)) {
      refColor.current.style.color = '#10b981';
      setScore(scoreHandler('good', score));
      setWinner(true);
      setAudio(winSound);
    } else {
      setAudio(failSound);
      setScore(scoreHandler('fail', score));
      refColor.current.style.color = '#ef4444';
    }
    setShow(true);
    setPokemonName(pokemon.name);
  };

  const handleNextGame = (e) => {
    e.preventDefault();
    setPokemonName('');
    setShow(false);
    setAudio(false);
    setWinner(false);
    setPokemon(randomPokemon());
    setInputValue('');
    refColor.current.style.color = 'white';
  };

  return (
    <>
      {winner && <ConfettiEffect />}
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 relative">
        <Score score={score} />

        {audio && <audio src={audio} autoPlay />}

        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2 drop-shadow-lg"
            style={{ fontFamily: 'Atomic' }}
          >
            ¿Quién es ese Pokémon?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            ¡Demuestra tus conocimientos Pokémon!
          </p>
        </div>

        {/* Main Game Card */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-slate-700/50 max-w-2xl w-full mx-4">
          {pokemon && (
            <>
              {/* Pokemon Image Container */}
              <div className="relative mb-8">
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-4 border-2 border-dashed border-slate-600/50">
                  <img
                    className="w-full h-full object-contain rounded-xl transition-all duration-1000 ease-out"
                    style={{
                      filter: show
                        ? 'brightness(100%) contrast(100%)'
                        : 'brightness(0%) contrast(0%)',
                      transform: show ? 'scale(1)' : 'scale(1.1)',
                    }}
                    src={pokemon.image}
                    alt="Pokemon silueta"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              </div>

              {/* Input Form */}
              <form className="space-y-6" onSubmit={handleClick}>
                {!show && (
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Escribe el nombre del Pokémon..."
                        className="w-full px-6 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg"
                        autoComplete="off"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="w-5 h-5 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-lg"
                    >
                      🔍 ¡Comprobar!
                    </button>
                  </div>
                )}
              </form>

              {/* Pokemon Name Display */}
              <div
                className={`text-center transition-all duration-1000 ${
                  show
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 capitalize tracking-wide"
                  ref={refColor}
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    transition: 'all 1s ease-out',
                  }}
                >
                  {pokemonName}
                </h2>

                {show && (
                  <button
                    type="button"
                    onClick={handleNextGame}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500/30 text-lg"
                  >
                    🎮 ¡Siguiente Pokémon!
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400">
          <p className="text-sm md:text-base">
            Creado con ❤️ para los amantes de Pokémon
          </p>
        </div>
      </div>
    </>
  );
}
