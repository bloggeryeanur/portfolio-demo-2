"use client";
import { Button, Container, Grid, Typography } from "@mui/material";
import AboutImage from "../image/about/hi.jpg";


const About = () => {
    return (
        <Container>
        <Grid


          container
          sx={{
            padding: "4rem 0",
          }}>
          {/* About text section */}
          
          <Grid
    
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              marginTop: "1rem",
              
            }}>
              
            <Typography variant="h4"> About Me</Typography>
            <Typography sx={{ margin: "1rem 0" }} variant="h5">
              Hello! I'M <span style={{ color: "red" }}>Yeanur Rahman</span>{" "}
            </Typography>
    
            <Typography>
              It is a longg established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
            <Typography sx={{ margin: "1rem 0" }}>
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content
              here', making it look like readable English.
            </Typography>
    
            <Typography >
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </Typography>
            <Button sx={{mt:2}} variant='contained' color='secondary' >Contact Me</Button>
          </Grid>
    
          {/* About image section */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{}}>
            <img
              style={{
                border: "5px solid gray",
                borderRadius: '50%'
              }}
              src={AboutImage}
              alt="About image"
            />
          </Grid>
        </Grid>
      </Container>
    );
};

export default About;