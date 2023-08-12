import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Socials from "./components/Socials/Socials";

function App() {
  return (
    <div className="App">
       <div className="container">
        <h1>
          Психолог Ивет Мутафчиева
          <br />
          Очаквайте скоро
        </h1>
        <Timer />
        <Preloader />
        <Socials />
      </div>
    </div>
  );
}

export default App;
