import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Herosection from "../Herosection/HeroSection";
import About from "../About/About";
import Services from "../Servicess/Servicess";
import Hire from "./Hire";
import PortFolio from "../portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "./Footer";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddHomeIcon from "@mui/icons-material/AddHome";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import Client from "../Client/Client";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navigation() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome to Portfolio Site
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon color="secondary" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ background: "#9400D3" }} />
        {/* List  */}
        <List sx={{ color: "#9400D3" }}>
          {/* */}
          {[
            { id: "Home" },
            { id: "About" },
            { id: "Services" },
            { id: "Client" },
            { id: "Portfolio" },
            { id: "Blog" },
            { id: "Contact" },
          ].map((text, index) => (
            <ListItem
              key={text.id}
              disablePadding
              sx={{
                display: "block",
              }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  {index === 0 ? (
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}>
                      <AddHomeIcon color="secondary" />
                    </Link>
                  ) : index === 1 ? (
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}>
                      <BroadcastOnHomeIcon color="secondary" />
                    </Link>
                  ) : index === 2 ? (
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}>
                      <AdminPanelSettingsIcon color="secondary" />
                    </Link>
                  ) : index === 3 ? (
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}>
                      <AddBusinessIcon color="secondary" />
                    </Link>
                  ) : index === 4 ? (
                    <Link
                      to="blog"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}>
                      <AirlineSeatReclineExtraIcon color="secondary" />
                    </Link>
                  ) : index === 5 ? (
                    <Link
                      to="client"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}>
                      <InboxIcon color="secondary" />
                    </Link>
                  ) : (
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={600}>
                      <MailIcon color="secondary" />
                    </Link>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text.id}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Import Other component */}
        {/*   */}

        <Box id="home">
          <Herosection />
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="services">
          <Services />
        </Box>
        <Hire />

        <Box id="portfolio">
          <PortFolio />
        </Box>
        <Box id="blog">
          <Blog />
        </Box>

        <Box id="client">
        
        </Box>
        <Box id="contact">
          <Contact />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
