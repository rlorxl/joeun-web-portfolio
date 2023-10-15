import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Main />
        <About />
      </main>
    </div>
  );
}

export default App;
