import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup";
import Switch from "../../Pages/Authantication/Switch"; //Signup and Signin Switch component
import { useSelector } from "react-redux";

//material ui imports
import * as React from "react";
import {MenuItem,Container,Menu,Typography,Toolbar,Divider,Box,Badge, AppBar,IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AdbIcon from "@mui/icons-material/Adb";
import { CustomButton, CustomSearch, SearchBarContainer } from "./style";
//import end


const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const [OpenPopup, SetOpenPopup] = useState(false);
  const navigate=useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{position:"relative",display:"flex"}}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={()=>navigate('/')}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shopping
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* Search bar */}
          <SearchBarContainer>
          <CustomSearch type='text'  placeholder="Search" />
          <IconButton><SearchIcon sx={{color:'black'}}/></IconButton>
          </SearchBarContainer>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* SearchBar End */}
        
          {/* login button */}
          {auth ? (
            <RightNav setAuth={setAuth} />
          ) : (
            <CustomButton sx={{ marginLeft: "auto"}} variant="contained" onClick={() => {SetOpenPopup(true);}}>Login</CustomButton>
          )}
        </Toolbar>

        {/* popup import  */}
        <Popup open={OpenPopup} setopen={SetOpenPopup} marginTop="-40px">
          <Switch />
        </Popup>

      </Container>
    </AppBar>
  );
};
export default Navbar;

//right navbar component

const RightNav = ({ setAuth }) => {
  const menuId = "primary-search-account-menu";
  const settings = ["Profile", "Account", "Logout"];
  const [userpopup, setUserpopup] = useState(false);
  const navigate = useNavigate();


  const cartData=useSelector((globalstate)=>{
    return globalstate.CartReducer;
  });

    

  const UserMenuClick = (event) => {
    switch (event.target.innerText) {
      case "Profile":
        navigate("/profile");
        break;

      case "Account":
        navigate("/account");
        break;

      case "Logout":
        setAuth(false);
        break;
    }
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }} style={{position:"absolute",right:10}}>
       <CustomButton variant="contained" onClick={()=>{navigate("/orders")}} >My Orders</CustomButton>
        
       <Tooltip title="Wishlist">
        <IconButton size="large"  color="inherit" onClick={()=>navigate('/wishlist')}>
            <FavoriteIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Cart">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={cartData.length} color="error" onClick={()=>{navigate('/Cart')}}>
            <LocalMallIcon />
          </Badge>
        </IconButton>
        </Tooltip>


        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={() => {
            setUserpopup(true);
          }}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        {/* drop down menu items */}
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={userpopup}
          onClose={() => {
            setUserpopup(false);
          }}
        >
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              onClick={() => {
                setUserpopup(false);
              }}
            >
              <Typography textAlign="center" onClick={UserMenuClick}>
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};
