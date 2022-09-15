import { Provider } from "react-redux";
import store from "./redux";
import Dictaphone from "./components/Dictaphone";

function App() {
  return (
    <Provider store={store}>
      <Dictaphone />
    </Provider>
  );
}

export default App;
