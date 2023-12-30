import { Box, Button, Container, Typography } from "@mui/material";

const Hire = () => {
  return (
    <Container maxWidth='md'>

    <Box sx={{ textAlign: "center", margin: "4rem 0" }}>
      <Typography variant="h4">I Am Available For Freelancer.</Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        HIRE ME!
      </Button>
    </Box>
    </Container>
  );
};

export default Hire;