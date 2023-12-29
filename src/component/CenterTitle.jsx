import { Box, Typography } from "@mui/material";

const CenterTitle = ({ title, text, text2 }) => {
  return (
    <Box sx={{ textAlign: "center", margin: "2rem 0" }}>
      <Typography sx={{ marginBottom: "1rem" }} variant="h4" color="secondary">
        {title}
      </Typography>
      <Typography >{text}</Typography>
      <Typography >{text2}</Typography>
    </Box>
  );
};

export default CenterTitle;
