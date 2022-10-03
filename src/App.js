import "./App.css";
import { Landing } from "./Components/Landing";
import { configStore } from "./State/Store/ConfigStore";
import { Provider } from "react-redux";

function App() {
  const localStore = configStore();
  return (
    <div className="App">
      <Provider store={localStore}>
        <Landing />
      </Provider>
    </div>
  );
}

export default App;
