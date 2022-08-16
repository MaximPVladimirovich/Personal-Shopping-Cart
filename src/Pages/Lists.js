import { useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import { ListsContext } from "../context/ListContext";

function Lists() {
  const navigate = useNavigate();
  const { lists, isLoading, error, fetchLists } = useContext(ListsContext);

  useEffect(() => {
    !lists.length && fetchLists();
  }, [lists, fetchLists]);

  return (
    <>
      {navigate && <Navbar title="LISTS" />}
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
          lists.map((list, index) => {
            return (
              <Box
                key={list.id + index}
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
                <Link to={`/lists/${list.id}`}>
                  <Typography variant="h5">{list.title}</Typography>
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
