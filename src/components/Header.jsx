import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-blue.png"
import { Link } from "react-scroll";
import NovoMenu from "../components/NovoMenu";
import PropTypes from 'prop-types';

import { Button } from "@mui/material";

export default function Header(props){

    let navigate = useNavigate();

    Header.propTypes = {
        onButtonClick: PropTypes.func.isRequired,
    }

    return (   
        <> 
            <HeaderContainer>
                <Logo onClick={() => navigate("/")}>
                    <img src={logo} draggable={false}/>
                    <Title>
                        <h1> BO </h1>
                        <h1> RA </h1>
                        <h1> LA </h1>
                    </Title>                
                </Logo>            
                <Menu>
                    <ul>
                        <li><Link to="about" smooth={true} duration={700}><Button sx={{ textTransform: 'none', color: 'white' }}>Sobre</Button></Link></li>
                        <li><Link to="contact" smooth={true} duration={700}><Button sx={{ textTransform: 'none', color: 'white'}}>Contato</Button></Link></li>
                        <li><Button sx={{ textTransform: 'none', color: 'white'}} onClick={() => props.onButtonClick(true)} >Entrar</Button></li>
                    </ul>
                </Menu>
            </HeaderContainer>
            <MenuMobile > 
                <NovoMenu />
            </MenuMobile>            
        </>
    )
}

const HeaderContainer = styled.header`
    background: rgb(10, 10, 10);
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    position: fixed;
    padding-left: 8.3%;
    padding-right: 8.3%;
    z-index: 2;   
    top: 0; 

    @media (max-width: 650px) {
        display: none;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 16.7%;
    cursor: pointer;

    & > img {
        -webkit-user-drag: none;
        user-select: none;    
        height: 6vh;
    }    
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        color: white;
        font-size: 0.7em;
        font-weight: 700;
        margin-left: 5px;
    }
`
const Menu = styled.nav`
    width: 34%;
    & > ul {
        display: flex;
        justify-content: space-between;
    }
`
const MenuMobile = styled.div`
    display: none;
    position: fixed;
    top: 0;
    z-index: 2;

    @media (max-width: 650px) {
        display: flex;
    }
`