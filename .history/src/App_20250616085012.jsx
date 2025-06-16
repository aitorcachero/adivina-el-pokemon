import Footer from './components/Footer';
import Game from './components/Game';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;
