import { Instagram, Twitter, FacebookRounded } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, List, ListItem } from "@mui/material";

const Social = () => {
  return (
    <Box>
      <List
        style={{
          display: "flex",
        }}>
        <ListItem>
          <a href={"https://www.facebook.com/"}>
            <FacebookRounded color="secondary" />
          </a>
        </ListItem>
        <ListItem>
          <a href={"https://www.instagram.com/"}>
            <Instagram color="secondary" />
          </a>
        </ListItem>

        <ListItem>
          <a href={"https://www.linkedin.com/"}>
            <LinkedInIcon color="secondary" />
          </a>
        </ListItem>

        <ListItem>
          <a href={"https://twitter.com/home"}>
            <Twitter color="secondary" />
          </a>
        </ListItem>
      </List>
    </Box>
  );
};

export default Social;
