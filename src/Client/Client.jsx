import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Container, Grid } from "@mui/material";
import One from "../image/client/testi-1.jpg";
import CenterTitle from "../component/CenterTitle";

const Client = () => {
  return (
    <Container maxWidth="xs">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh",}}
      >
        <Grid item xs={12}>
          <CenterTitle title="Our Satisfied Client" />
        </Grid>
        <Grid item xs={12}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <Box textAlign="center">
                <img
                  src={One}
                  alt="Client"
                  style={{
                    borderRadius: "50%",
                    maxWidth: "100px",
                    height: "100px",
                  }}
                />
                <CenterTitle
                  title="--Mr. Rahman--"
                  text="E-commerce"
                  text2="Frontend and Backend Developer"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box textAlign="center">
                <img
                  src={One}
                  alt="Client"
                  style={{
                    borderRadius: "50%",
                    maxWidth: "100px",
                    height: "100px",
                  }}
                />
                <CenterTitle
                  title="--Mr. Rahman--"
                  text="E-commerce"
                  text2="Frontend and Backend Developer"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box textAlign="center">
                <img
                  src={One}
                  alt="Client"
                  style={{
                    borderRadius: "50%",
                    maxWidth: "100px",
                    height: "100px",
                  }}
                />
                <CenterTitle
                  title="--Mr. Rahman--"
                  text="E-commerce"
                  text2="Frontend and Backend Developer"
                />
              </Box>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Client;
