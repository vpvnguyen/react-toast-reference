import "./App.css";
import DefaultToast from "./components/DefaultToast";
import DefaultToastEmitter from "./hooks/useDefaultToastEmitter";
import IndefiniteToast from "./components/IndefiniteToast";

function App() {
  return (
    <div className="App">
      <DefaultToast />
      <DefaultToastEmitter />
      <IndefiniteToast />
    </div>
  );
}

export default App;
