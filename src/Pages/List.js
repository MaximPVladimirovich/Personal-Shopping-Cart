import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/NavBar/Navbar";
import TodosContext from "../context/TodosContext";

function List() {
  const navigate = useNavigate();
  const { listId } = useParams();

  const { isLoading, todos, error, fetchTodos } = useContext(TodosContext);

  useEffect(() => {
    !todos.length && listId && fetchTodos(listId);
  }, [todos, listId, fetchTodos]);

  console.log(todos);

  return (
    <>
      {navigate && (
        <Navbar
          goBack={() => navigate(-1)}
          openForm={() => navigate(`/list/${listId}/new`)}
          // title={ && list.title}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          marginHorizontal: "2%",
          marginVertical: "5%",
        }}
      >
        {isLoading || error ? (
          <Box>{isLoading ? "Loading..." : error}</Box>
        ) : (
          todos.map((todo, index) => {
            return (
              <Box key={todo.id + index}>
                <Typography variant="h5">{todo.body}</Typography>
              </Box>
            );
          })
        )}
      </Box>
    </>
  );
}

export default List;
