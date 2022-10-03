import "./App.css";
import DefaultToast from "./components/DefaultToast";
import DefaultToastEmitter from "./hooks/useDefaultToastEmitter";

function App() {
  return (
    <div className="App">
      <DefaultToast />
      <DefaultToastEmitter />
    </div>
  );
}

export default App;
