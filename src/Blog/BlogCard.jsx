import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BlogCard = ({ details, name, date, title, img }) => {
  return (
    <Card sx={{ margin: "1rem" }}>
      <CardContent sx={{}}>
        <img
          style={{ width: "23rem", height: "12rem" }}
          src={img}
          alt="blog page"
        />
        <Typography color="secondary" variant="h5">
          {title}
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          {date} <span style={{ text: "red" }}>{name}</span>
        </Typography>
        <Typography>{details}</Typography>
      </CardContent>
      <CardActions>
        <a href="/">Read More...</a>
      </CardActions>
    </Card>
  );
};

export default BlogCard;