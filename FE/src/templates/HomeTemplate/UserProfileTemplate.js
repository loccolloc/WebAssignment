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
import Header from './Layout/Header/Header'
import { useHistory } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';

import Avatar from '../../components/Avatar/Avatar'
const drawerWidth = 250;

export const UserProfileTemplate = (props) => { //path, exact, Component
    const { Component, ...restProps } = props;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    var role = localStorage.getItem('role');
    const history = useHistory();
    var username = localStorage.getItem("username");
    if (role === "admin") {
        history.push("/admin");
    } else if (role !== "user") {
        history.push("/home");

    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='flex flex-wrap items-center' style={{ marginTop: '100px' }}>
            <Toolbar />
            <div className='flex flex-wrap justify-center'>
                <Avatar />
                <h3 className="text-dark w-full text-center font-bold">
                    {username}({role})
                </h3>
            </div>
            <List className='w-full'>
                <NavLink to='userProfile' className="text-dark">
                    <ListItem key='profile' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Thông tin cá nhân" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to='historyList' className="text-dark">
                    <ListItem key='historyList' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PhoneIphoneRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lịch sử đơn hàng" />
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

    const container = window !== undefined ? () => window().document.body : undefined;
    return <Route {...restProps} render={(propsRoute) => {
        return (
            <>
                <Header {...propsRoute} style={{ position: 'absolute', zIndex: '1000' }} />
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
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
            </>
        );
    }} />
}

UserProfileTemplate.propTypes = {
    window: PropTypes.func,
};
