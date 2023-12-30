import { Box } from "@mui/material";
import { Link } from "react-scroll";

const NavIcon = ({ id, menuBtn }) => {
  return (
    <Box>
      <Link to={id} spy={true} smooth={true} offset={50} duration={500}>
        <>{menuBtn} </>
      </Link>
    </Box>
  );
};

export default NavIcon;
