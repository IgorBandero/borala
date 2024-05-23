import { useState } from 'react';
import { Link } from "react-scroll";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: "rgb(10,10,10)", // Cor verde personalizada
        },
        secondary: {
        main: "rgb(20, 20, 20)", // Cor laranja personalizada
        },
    },
});

export default function NovoMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="static" color="primary" sx={{ color: "primary", width: "100vw"}}>
                    <Toolbar>
                        <Menu
                            id="menu"
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: '#333', 
                                    color: '#fff',           
                                },
                            }}
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}>
                            <Link to="about-mobile" smooth={true} duration={700}><MenuItem onClick={handleMenuClose}>Sobre</MenuItem></Link>
                            <Link to="contact-mobile" smooth={true} duration={700}><MenuItem onClick={handleMenuClose}>Contato</MenuItem></Link>
                            <MenuItem sx={{display: 'none'}} onClick={handleMenuClose}>Entrar</MenuItem>
                        </Menu>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Bora Lá
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen} >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}
