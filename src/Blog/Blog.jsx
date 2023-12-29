import { Box, Container, Grid } from "@mui/material";
import Blog1 from "../image/blog/blog-1.jpg";
import Blog2 from "../image/blog/blog-2.jpg";
import Blog3 from "../image/blog/blog-3.jpg";
import BlogCard from "./BlogCard";
import CenterTitle from "../component/CenterTitle";

const Blog = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: "2rem 0",
        }}>
        <CenterTitle
          title="Our Blog"
          text="It is a long established fact that a reader will be of a page when"
          text2="established fact looking at its layout."></CenterTitle>

        <Grid container>
          {/* Card section */}
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <BlogCard
              title="There are many variations"
              date="11 March 2018 By"
              name="Yeanur"
              details="Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies."
              img={Blog1}
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <BlogCard
              title="Contrary to popular belief"
              date="18 March 2018 By"
              name="Rahman"
              details="Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies."
              img={Blog2}
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <BlogCard
              title="Lorem Ipsum is not simply"
              date="11 March 2018 By"
              name="Yeanur"
              details="Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies."
              img={Blog3}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
