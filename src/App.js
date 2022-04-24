import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div>
      <Header />

      <section className="container mt-5">
        <Meme />
      </section>
    </div>
  );
}

export default App;
