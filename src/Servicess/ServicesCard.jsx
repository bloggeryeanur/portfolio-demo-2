import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Icon } from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";

const ServicesCard = ({ cartTitle, cartText, cIcon }) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card variant="outlined">
        <CardContent
          sx={{ textAlign: "center", }}>
          <Typography>{cIcon} </Typography>
          <Typography variant="h5" sx={{ padding: "1rem 0" }}>
            {cartTitle}
          </Typography>
          <Typography>{cartText}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServicesCard;