import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";

// Working image

import One from "../image/wrok/1.jpg";
import Two from "../image/wrok/2.jpg";
import Three from "../image/wrok/3.jpg";
import Four from "../image/wrok/4.jpg";
import Five from "../image/wrok/5.jpg";
// Wroking icon
import {
  DesignServices,
  DesignServicesOutlined,
  PhonelinkLockOutlined,
  WifiProtectedSetupRounded,
  WorkHistory,
} from "@mui/icons-material";
import CenterTitle from "../component/CenterTitle";
import PortFolioCard from "./PortFolioCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PortFolio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allImage = [One, Two, Three, Four, Five];
  const seo = [Two, Three, Four, Five];
  const design = [Three, Four, Five];
  const Wordpress = [One, Two, Three, Five];
  const work = [One, Two, Four, Five];

  return (
    <Container maxWidth="lg">
      <Box>
        <CenterTitle
          title="Our Works"
          text="It is a long established fact that a reader will be of a page when "
          text2="established fact looking at its layout"
        />
        <Box>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab
              icon={<PhonelinkLockOutlined color="secondary" />}
              label="All"
              {...a11yProps(0)}
            />

            <Tab
              icon={<DesignServicesOutlined color="secondary" />}
              label="SEO"
              {...a11yProps(1)}
            />

            <Tab
              icon={<DesignServices color="secondary" />}
              label="Design"
              {...a11yProps(2)}
            />

            <Tab
              icon={<WorkHistory color="secondary" />}
              label="Work"
              {...a11yProps(3)}
            />

            <Tab
              icon={<WifiProtectedSetupRounded color="secondary" />}
              label="Wordpress"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        {/* All Work section check please chat gpt */}
        <CustomTabPanel value={value} index={0}>
          <Box>
            <Grid container>
              {allImage.map((hi) => (
                <Grid
                  key={hi}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}>
                  <PortFolioCard
                    btn="Details"
                    dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam nulla quaerat ullam eum, culpa fuga veniam possimus perspiciatis nesciunt corporis? Laborum doloribus dignissimos beatae ipsam officiis aspernatur nobis cupiditate."
                    img2={hi}
                    img1={hi}
                    alt="One image "
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>
        {/* Seo Section */}
        <CustomTabPanel value={value} index={1}>
          <Box>
            <Grid container>
              {seo.map((hi) => (
                <Grid
                  key={hi}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}>
                  <PortFolioCard
                    btn="Details"
                    dec="Here is description"
                    img2={hi}
                    img1={hi}
                    alt="One image "
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>
        {/* Web Design */}
        <CustomTabPanel value={value} index={2}>
          <Box>
            <Grid container>
              {design.map((hi) => (
                <Grid
                  key={hi}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}>
                  <PortFolioCard
                    btn="Details"
                    dec="Here is description"
                    img2={hi}
                    img1={hi}
                    alt="One image "
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>{" "}
        {/* Work section */}
        <CustomTabPanel value={value} index={3}>
          <Box>
            <Grid container>
              {Wordpress.map((hi) => (
                <Grid
                  key={hi}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}>
                  <PortFolioCard
                    btn="Details"
                    dec="Here is description"
                    img2={hi}
                    img1={hi}
                    alt="One image "
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>{" "}
        {/* Wordpress */}
        <CustomTabPanel value={value} index={4}>
          <Box>
            <Grid container>
              {work.map((hi) => (
                <Grid
                  key={hi}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}>
                  <PortFolioCard
                    btn="Details"
                    dec="Here is description"
                    img2={hi}
                    img1={hi}
                    alt="One image "
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
