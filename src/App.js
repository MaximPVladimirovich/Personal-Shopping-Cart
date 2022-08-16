import "./App.css";
import Header from "./components/Header/Header";
import { TodosContextProvider } from "./context/ListContext";

function App() {
  return (
    <>
      <TodosContextProvider>
        <Header></Header>
      </TodosContextProvider>
    </>
  );
}

export default App;
