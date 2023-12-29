import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Container } from "@mui/material";
import Client1 from '../image/client/testi-1.jpg'
import Client2 from '../image/client/testi-2.jpg'
import Client3 from '../image/client/testi-3.jpg'
import CenterTitle from "../component/CenterTitle";


const Client = () => {
  return (
    <Container maxWidth="lg" sx={{ margin: "1rem 0" }}>
        <CenterTitle title='Our Client' text='It is a long established fact that a reader will be of a page when e' text2='stablished fact looking at its layout.'/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
            
            <SwiperSlide>
          <Box sx={{ background: "gray", height: "15rem", color: "white" }}>
            Slide 1
            </Box>
            </SwiperSlide><SwiperSlide>
          <Box sx={{ background: "gray", height: "15rem", color: "white" }}>
            Slide 1
            </Box>
            </SwiperSlide><SwiperSlide>
          <Box sx={{ background: "gray", height: "15rem", color: "white" }}>
            Slide 3
            </Box>
            </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Client;
