import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// Blog Details
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, CardActionArea, CardMedia } from "@mui/material";

const BlogCard = ({ details, name, date, title, img }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Box>
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description">
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}>
              {/* Blog Detail text */}
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit accusamus, obcaecati aut nulla corporis laboriosam
                deserunt voluptate debitis minus incidunt illum culpa molestiae
                quae et, perspiciatis repudiandae maiores alias corrupti. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Amet, rem
                animi! Iure eaque assumenda deleniti facilis, doloribus
                voluptas. Consequuntur, non fugiat maxime dolor libero sed qui
                laborum deserunt a optio? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. In hic excepturi consequuntur dolores sed
                ipsum deleniti illum officiis, impedit voluptate perferendis
                atque cumque quos suscipit maiores nihil earum minima
                reprehenderit? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Impedit accusamus, obcaecati aut nulla
                corporis laboriosam deserunt voluptate debitis minus incidunt
                illum culpa molestiae quae et, perspiciatis repudiandae maiores
                alias corrupti. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Amet, rem animi! Iure eaque assumenda deleniti
                facilis, doloribus voluptas. Consequuntur, non fugiat maxime
                dolor libero sed qui laborum deserunt a optio? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. In hic excepturi
                consequuntur dolores sed ipsum deleniti illum officiis, impedit
                voluptate perferendis atque cumque quos suscipit maiores nihil
                earum minima reprehenderit? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Impedit accusamus, obcaecati aut
                nulla corporis laboriosam deserunt voluptate debitis minus
                incidunt illum culpa molestiae quae et, perspiciatis repudiandae
                maiores alias corrupti. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Amet, rem animi! Iure eaque assumenda deleniti
                facilis, doloribus voluptas. Consequuntur, non fugiat maxime
                dolor libero sed qui laborum deserunt a optio? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. In hic excepturi
                consequuntur dolores sed ipsum deleniti illum officiis, impedit
                voluptate perferendis atque cumque quos suscipit maiores nihil
                earum minima reprehenderit?
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date} <span style={{ text: "red" }}>{name}</span>
            </Typography>
            <Typography>{details}</Typography>
          </CardContent>
          <Button onClick={handleClickOpen("paper")}>Details...</Button>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default BlogCard;
