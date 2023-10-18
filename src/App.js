import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";
import Works from "./components/Works.tsx";
import Contact from "./components/Contact.tsx";
import Cursor from "./ui/Cursor.tsx";
import useMouse from "./hooks/useMouse.tsx";

function App() {
  useMouse();
  return (
    <div className="App">
      <Cursor />
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
