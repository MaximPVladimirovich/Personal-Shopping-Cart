import { useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
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
      >
        {isLoading || error ? (
          <Box>{isLoading ? "Loading..." : error}</Box>
        ) : (
          todos.map((todo) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  textAlign: "left",
                  alignItems: "center",
                  padding: "1%",
                  background: "lightGrey",
                  borderRadius: "5px",
                  marginBottom: "2%",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Link key={todo.id} to={`/lists/${todo.id}`}>
                  <Typography variant="h5">{todo.title}</Typography>
                </Link>
              </Box>
            );
          })
        )}
      </Box>
    </>
  );
}

export default Lists;
