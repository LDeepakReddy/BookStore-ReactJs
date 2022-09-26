import { Badge, ListItemText, Menu, MenuList, Toolbar, } from '@mui/material';
import React, { useState } from 'react';
import education from '../../images/education.svg';
import { Logout, PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



import './Header.css'


import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';



function Header(props) {

    const navigate = useNavigate();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    const goToWishlist = () => {
        navigate('/wishlist')
    }

    const goToCart = () => {
        navigate('/cart')
    }

    const searching = (event) => {
        props.search(event.target.value)
    }



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
        // color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '400px',

        },
    }));

    return (
        <div className='headerToolbar'>

            <Toolbar style={{ backgroundColor: '#A03037', height: '60px', width: '1300px' }}>
                <div className="imageAndText">
                    <img className='bookImage' src={education} alt="" />
                    <span className='Booktitle' style={{ color: 'white' }}>Bookstore</span>
                </div>
                {/* <Search >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        onChange={searching}
                       
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}


                    />
                </Search> */}
                <div className="search">
                    <div className="searchIcon"><SearchOutlinedIcon /></div>
                    <input placeholder='Search...' type="text" className='inputSearch' onChange={searching} />
                </div>

                <div className="profile">
                    <PersonOutlined style={{ color: '#FFFFFF' }} />
                    <span
                        className="profile-name"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >Deepak </span>
                    <Menu
                        id="basic-menu"

                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        <MenuItem onClick={goToWishlist}>
                            <FavoriteIcon>
                            </FavoriteIcon>
                            {/* <ListItemText>My Wishlist</ListItemText> */}
                            <span className='MyWishlist'>My Wishlist</span>
                        </MenuItem>
                        <MenuItem className='Logout'>
                            <span onClick={logout} className='Logout'>Logout</span>
                        </MenuItem>

                    </Menu>



                </div>
                <div onClick={goToCart} className="carticon">
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlined style={{ color: '#FFFFFF' }} />
                    </Badge>
                    <span className="profile-name">Cart</span>
                </div>


            </Toolbar>

        </div>



    );
}

export default Header;