import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
const Footer = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ mt: 5, mb: 0 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="Secondary"
            mx={2}
          >
            Contact me : 9856784512
          </Typography>
          kushwahvivek805@gmail.com
          <Box>
            <IconButton
              size="large"
              color="inherit"
              href="https://www.instagram.com/"
              target="blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="https://github.com/settings/profile"
              target="blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/vivek-kushwah-934704237/"
              target="blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/"
              target="blank"
            >
              <FacebookIcon />
            </IconButton>
          </Box>
          <Typography noWrap component="div" variant="h7">
            @ All Right Reserved
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
