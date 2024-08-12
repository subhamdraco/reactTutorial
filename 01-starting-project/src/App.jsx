import Header from "./Components/Header/Header.jsx";
import Concepts from "./Components/Concepts/Concepts.jsx";
import Examples from "./Components/Examples/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Concepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
