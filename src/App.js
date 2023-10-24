import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";
import Works from "./components/Works.tsx";
import Article from "./components/Article.tsx";
import Contact from "./components/Contact.tsx";
import Cursor from "./ui/Cursor.tsx";
import useMouse from "./hooks/useMouse.tsx";

function App() {
  const [mousemoveHandler] = useMouse();

  return (
    <div onMouseMove={mousemoveHandler}>
      <Cursor />
      <Navigation />
      <main className="main">
        <Main />
        <About />
        <Works />
        <Article />
        <Contact />
      </main>
    </div>
  );
}

export default App;
