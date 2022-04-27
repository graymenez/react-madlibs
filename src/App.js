import logo from "./logo.svg";
import "./App.css";
import MadlibForm from "./MadlibForm";
import Madlib from "./Madlib";

function App() {
  const addCommas = (number) => {
    return number.toLocaleString();
  };
  console.log(addCommas(-3243423));
  return (
    <div className="App">
      <Madlib />
    </div>
  );
}

export default App;
