import "./App.css";
import Header from "./components/Header/Header";
import { TodosContextProvider } from "./context/ListContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lists from "./Pages/Lists";

function App() {
  return (
    <>
      <BrowserRouter>
        <TodosContextProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Lists />} />
          </Routes>
        </TodosContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
