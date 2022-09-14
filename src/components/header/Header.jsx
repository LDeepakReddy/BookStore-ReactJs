import { alpha, Card, Divider, IconButton, ListItemText, Menu, MenuList, Toolbar, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import education from '../../images/education.svg';
import { PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';



import './Header.css'


import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {

    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    
    // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',

        marginLeft: '26px',
        width: '490px',
        height: '33px'

    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '400px',

        },
    }));

    return (
        <div>

            <Toolbar style={{ backgroundColor: '#A03037', height: '60px', width: '1300px' }}>
                <div className="imageAndText">
                    <img className='bookImage' src={education} alt="" />
                    <span className='Booktitle' style={{ color: 'white' }}>Bookstore</span>
                </div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"

                    />
                </Search>

                <div className="profile">
                    <PersonOutlined style={{ color: '#FFFFFF' }} />
                    <span
                       
                        className="profile-name">Deepak </span>
                    {/* <Menu
                        id="basic-menu"

                       
                    ></Menu>

                    <MenuItem>
                        <FavoriteIcon>

                        </FavoriteIcon>
                        <ListItemText>My Wishlist</ListItemText>

                    </MenuItem>
                    <MenuItem>

                        <ListItemText>Logout</ListItemText>

                    </MenuItem> */}



                </div>
                <div className="carticon">

                    <ShoppingCartOutlined style={{ color: '#FFFFFF' }} />

                    <span className="profile-name">Cart</span>
                </div>


            </Toolbar>

        </div>



    );
}

export default Header;