import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Route } from "react-router";
import logo from "../../assets/apple_resized_aspect_fixed.png"
import { NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import Avatar from '../../components/Avatar/Avatar'
const drawerWidth = 240;

export const ProfileTemplate = (props) => { //path, exact, Component
    const { Component, ...restProps } = props;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <Toolbar />
      <div className='flex flex-wrap justify-center'>
        <Avatar />
        <h3 className="text-dark w-full text-center font-bold">
        Admin01
        </h3>
      </div>
      <List>
        <NavLink to='admin' className="text-dark">
            <ListItem key='profile' disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Thông tin cá nhân" />
            </ListItemButton>
            </ListItem>
        </NavLink>
        <NavLink to='manageProducts' className="text-dark">
            <ListItem key='manageProducts' disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <PhoneIphoneRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Quản lí sản phẩm" />
            </ListItemButton>
            </ListItem>
        </NavLink>
        <NavLink to='manageUsers' className="text-dark">
            <ListItem key='manageUsers' disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <SupervisedUserCircleRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Quản lí người dùng" />
            </ListItemButton>
            </ListItem>
        </NavLink>
        
      </List>
      <Divider />
      <List>
        <NavLink to='#' className="text-danger">
            <ListItem key="logout" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-danger">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </ListItemIcon>
                <ListItemText primary="Đăng xuất" />
            </ListItemButton>
            </ListItem>
        </NavLink>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;
  return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style = {{background: 'rgb(55 65 81)'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            <NavLink to='admin' className="flex">
                  <a href="#" aria-label="Back to homepage" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src={logo} alt="cyberlearn.vn" />
                  </a>
            </NavLink>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Component {...propsRoute} />
      </Box>
    </Box>
  );
  }} />
}

ProfileTemplate.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

