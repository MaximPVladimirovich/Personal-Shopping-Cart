import "./App.css";
import Header from "./components/Header/Header";
import { ListsContextProvider } from "./context/ListContext";
import { TodosContextProvider } from "./context/TodosContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lists from "./Pages/Lists";
import List from "./Pages/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <ListsContextProvider>
          <TodosContextProvider>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Lists />} />
              <Route path="/lists/:listId" element={<List />} />
            </Routes>
          </TodosContextProvider>
        </ListsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
