import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Header({ title = "Personal Shopping Cart" }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "orange",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography
        variant="h3"
        color="inherit"
        noWrap
        sx={{ pointerEvents: "none" }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Header;
