import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";
import Works from "./components/Works.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Main />
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
