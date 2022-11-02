import "./App.css";
import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";

function App() {
  return (
    <div className="container">
      <h2>Hello World</h2>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

export default App;
