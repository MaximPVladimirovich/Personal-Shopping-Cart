import TextButton from "../Button/Button";
import { Box, Typography } from "@mui/material";

function Navbar({ goBack, title, openForm = false }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "white",
      }}
    >
      {goBack && (
        <TextButton
          sx={{
            marginHorizontal: "10px",
            marginVertical: "5%",
          }}
          onClick={goBack}
          text={`< Go Back`}
        />
      )}
      <Typography variant="h5" sx={{ textAlign: "center", flexBasis: "60%" }}>
        {title}
      </Typography>
      {openForm && (
        <TextButton
          sx={{
            marginHorizontal: "10px",
            marginVertical: "5%",
          }}
          onClick={openForm}
          text={`+ Add New`}
        />
      )}
    </Box>
  );
}

export default Navbar;
