"use client";
import { Box, Container, Grid } from "@mui/material";
import ServicesCard from "./ServicesCard";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AdbIcon from "@mui/icons-material/Adb";
import MovieIcon from "@mui/icons-material/Movie";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { yellow } from "@mui/material/colors";
import CenterTitle from "../component/CenterTitle";

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: "2rem 0",
        }}>
        {/* Title section */}
        <CenterTitle
          title="Our Services"
          text="it is a long established fact that a reader will be of a page when "
          text2="established fact looking at its layout."></CenterTitle>

        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            {/* Import servicesCard */}
            <ServicesCard
              cIcon={<WebAssetIcon color="secondary" />}
              cartTitle="Graphic Design"
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<BorderColorIcon color="secondary" />}
              cartTitle="Unlimited Color              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<AdbIcon color="secondary" />}
              cartTitle="Media Marketing"
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<MovieIcon color="secondary" />}
              cartTitle=" Unlimited Wifi
              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<SaveAltIcon color="secondary" />}
              cartTitle=" Responsive Design
              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<WebAssetIcon color="secondary" />}
              cartTitle=" Easy to customize
              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
