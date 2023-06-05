import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import first from '../assets/navbar-icons/firstLogo.png'
import seccond from '../assets/navbar-icons/seccondLogo.png'
import third from '../assets/navbar-icons/thirdLogo.png'
// const navItems = ["Home", "About", "Contact"];

const Navbar = ({ setShowSideBar, showSideBar }) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            setShowSideBar(!showSideBar);
            console.log(showSideBar);
          }}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <img src={first} alt="logo" style={{width:'50px'}}/>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))} */}
          <img src={first} alt="logo" style={{width:'50px'}}/>
          <img src={seccond} alt="logo" style={{width:'150px'}}/>
          <img src={third} alt="logo" style={{width:'40px'}}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
