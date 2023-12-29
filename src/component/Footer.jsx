import { Box, Container, Typography } from "@mui/material";
import Social from "./Social";

const Footer = () => {
  return (
    <Container maxWidth='lg'>

    <Box
      sx={{ 
        background: "gray",
        padding: "6rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Box>

      <Social></Social>
      <Typography color='secondary'>2023 &copy; Yeanur. Design by Rahman.</Typography>
    </Box>
        </Box>
        </Container>
  );
};

export default Footer;