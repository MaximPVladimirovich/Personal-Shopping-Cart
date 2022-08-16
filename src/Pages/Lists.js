import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import { TodosContext } from "../context/ListContext";

function Lists() {
  const navigate = useNavigate();
  const { todos, isLoading, error, fetchTodos } = useContext(TodosContext);

  useEffect(() => {
    !todos.length && fetchTodos();
  }, [todos, fetchTodos]);

  return (
    <>
      {navigate && Navbar({ title: "Lists" })}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          margin: "5%",
        }}
      ></Box>
    </>
  );
}

export default Lists;
