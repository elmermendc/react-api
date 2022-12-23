import ListarArticulos from "./components/ListarPersonajes";
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-rose-600">
      <p className="text-zinc-50 hover:text-zinc-900 text-center text-3xl py-5">
      The Rick and Morty API
      </p>

      <ListarArticulos />
      <Footer />
    </div>
  );
}

export default App;
