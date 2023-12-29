import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PortFolioCard({ btn, dec, img2, img1, alt }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={img1}
          alt="Modal image"
        />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <img
                style={{ width: "100%", height: "auto" }}
                src={img2}
                alt={alt}
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ color: "white" }}>
              {dec}
            </Typography>
            <Button variant="contained" color="secondary">
              {btn}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
