import { Button } from "@mui/material";

function TextButton({ text }) {
  return (
    <Button
      variant="container"
      color="orange"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "orange",
        color: "white",
        padding: "10px",
        lineHeight: 2,
        borderRadius: "5px",
        border: 0,
        fontSize: "inherit",
        cursor: "pointer",
      }}
    >
      {text}
    </Button>
  );
}

export default TextButton;
