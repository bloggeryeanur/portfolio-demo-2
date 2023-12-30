import { Box, Container, Grid } from "@mui/material";
import Blog1 from "../image/blog/blog-1.jpg";
import Blog2 from "../image/blog/blog-2.jpg";
import Blog3 from "../image/blog/blog-3.jpg";
import BlogCard from "./BlogCard";
import CenterTitle from "../component/CenterTitle";

const Blog = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <CenterTitle
          title="Our Blog"
          text="It is a long established fact that a reader will be of a page when"
          text2="established fact looking at its layout."></CenterTitle>

        <Grid spacing={1} container>
          {/* Card section */}
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <BlogCard
              title="Lorem Ipsum is not simply"
              date="11 March 2018 By"
              name="Yeanur"
              details=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus"
              img={Blog1}
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <BlogCard
              title="Lorem Ipsum is not simply"
              date="18 March 2018 By"
              name="Rahman"
              details=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus"
              img={Blog2}
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <BlogCard
              title="Lorem Ipsum is not simply"
              date="11 March 2018 By"
              name="Yeanur"
              details=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus"
              img={Blog3}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
