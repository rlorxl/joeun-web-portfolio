import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";
import Works from "./components/Works.tsx";
import Cursor from "./ui/Cursor.tsx";
import useMouse from "./hooks/useMouse.tsx";

function App() {
  const [mousemoveHandler] = useMouse();

  return (
    <div className="App" onMouseMove={mousemoveHandler}>
      <Cursor />
      <Navigation />
      <main>
        <Main />
        <About />
        <Works />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
