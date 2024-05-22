import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import FaleConoscoPage from "./FaleConoscoPage";
import PageContainer from "../components/PageContainer";
import logo from "../assets/logo-blue.png";
import image01 from "../assets/image01.png";
import image01_mobile from "../assets/image01-mobile.png";
import image02 from "../assets/image02.png";
import beer from "../assets/beer.svg";
import game from "../assets/game.svg";
import bus from "../assets/bus.svg";
import book from "../assets/book.svg";
//import instagram from "../assets/logo-instagram.svg";
//import whatsapp from "../assets/logo-whatsapp.svg";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";

const theme = createTheme({
    palette: {
        green: {
            main: 'rgb(193,255, 114)', 
            light: 'rgb(216, 255, 164)',
            dark: 'rgb(157, 207, 91)',
            contrastText: 'rgb(20, 20, 20)'
        },
        blue: {
            main: 'rgb(2, 94, 219);', 
            light: 'rgb(106, 153, 219)',
            dark: 'rgb(23, 67, 128)',
            contrastText: 'rgb(20, 20, 20)'
        }
    },
});

export default function LandInPage(){

    const [isVisibleSignUp, setIsVisibleSignUp] = useState(false);
    const [isVisibleSignIn, setIsVisibleSignIn] = useState(false);

    const openSignIn = (novoValor) => {
        setIsVisibleSignIn(novoValor);
        setIsVisibleSignUp(false);
    };

    const openSignUp = (novoValor) => {
        setIsVisibleSignUp(novoValor);
        setIsVisibleSignIn(false);
    }

    return (
        <PageContainer>

            <Header onButtonClick={openSignIn}/>

            <MainContainer className="secao-com-imagem">

                <ImageFundo src={image01} />
                <ImageFundoMobile src={image02} />

                <MainLeftContainer>
                    <h1>Bora lá</h1>
                    <p>Conectando pessoas.</p>
                    <p>Construindo experiências.</p>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="green" sx={{ textTransform: 'none', color: 'white' }} onClick={() => {setIsVisibleSignUp(true); setIsVisibleSignIn(false);}}>Comece agora</Button>
                    </ThemeProvider>
                </MainLeftContainer>
                <MainRightContainer> 
                    <Image src={logo}/>
                </MainRightContainer>

                <SignUpContainer isOpen={isVisibleSignUp}>
                    <Button variant="text" sx={{ position: "absolute", top: "5px", left: "5px", color: "black"}} size="large" onClick={() => setIsVisibleSignUp(false)}>X</Button>
                    <SignUpPage onButtonClick={openSignIn}/>
                </SignUpContainer>

                <SignInContainer isOpen={isVisibleSignIn}>
                    <Button variant="text" sx={{ position: "absolute", top: "5px", left: "5px", color: "black"}} size="large" onClick={() => setIsVisibleSignIn(false)}>X</Button>
                    <SignInPage onButtonClick={openSignUp}/>
                </SignInContainer>

            </MainContainer>  

            <AboutContainer id="about">
                <AboutLeftContainer>
                    <AboutText>
                        <h1> Solução para </h1>
                        <h1> universitários </h1>
                        <p> Uma plataforma digital para universitários, 
                            que facilita a descoberta e participação em uma 
                            variedade de atividades e eventos, tornando a 
                            experiência universitária mais conectada e satisfatória.</p>
                    </AboutText>
                </AboutLeftContainer>
                <AboutRightContainer> 
                    <img src={image02}/>
                    <Opcoes>
                        <div className="bar-festas">
                            <img src={beer} />
                            <h2> Bares & Festas </h2> 
                        </div>
                        <div className="games-esportes"> 
                            <img src={game} />
                            <h2> Games & Esportes </h2>
                        </div>
                        <div className="viagens-passeios"> 
                            <img src={bus} />
                            <h2> Viagens & Passeios </h2>
                        </div>
                        <div className="estudos"> 
                            <img src={book} />
                            <h2> Eventos Acadêmicos </h2>
                        </div>
                    </Opcoes>                    
                </AboutRightContainer>
            </AboutContainer>  

            <AboutContainerMobile id="about-mobile">
                <div>
                    <h1> Solução para </h1>
                    <h1> universitários </h1>
                    <p> Uma plataforma digital para universitários, 
                        que facilita a descoberta e participação em uma 
                        variedade de atividades e eventos, tornando a 
                        experiência universitária mais conectada e satisfatória.</p>
                </div>
                <img src={image01_mobile} />
            </AboutContainerMobile>

            <ContactContainer id="contact">
                <LeftContainer>
                    <FaleConoscoPage />
                </LeftContainer>
                <RightContainer> 
                    <Equipe>

                    </Equipe>
                    <RedesSociais>
                                
                    </RedesSociais>
                </RightContainer>
            </ContactContainer>   

            <EventsContainerMobile> 
                <OpcoesMobile>
                    <div className="bar-festas">
                        <img src={beer} />
                        <h2> Bares & Festas </h2> 
                    </div>
                    <div className="games-esportes"> 
                        <img src={game} />
                        <h2> Games & Esportes </h2>
                    </div>
                    <div className="viagens-passeios"> 
                        <img src={bus} />
                        <h2> Viagens & Passeios </h2>
                    </div>
                    <div className="estudos"> 
                        <img src={book} />
                        <h2> Eventos Acadêmicos </h2>
                    </div>
                </OpcoesMobile>            
            </EventsContainerMobile>  

            <ContactContainerMobile id="contact-mobile">
                <FaleConoscoPage />
            </ContactContainerMobile>

        </PageContainer>
    );
}

const ImageFundo = styled.img`
    width: 50%;
    height: 100vh;
    position: absolute;
    z-index: 0;
    opacity: 0.2;
    left: 0;

    @media (max-width: 650px) {
        display: none;
    }
`
const ImageFundoMobile = styled.img`
    display: none;

    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 0;
    opacity: 0.4;
    left: 0;
    @media (max-width: 650px) {
        display: flex;
    }
`
const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 40px;
    background-color: rgb(20, 20, 20);
    width: 100%;
    height: 100%;

    @media (max-width: 650px) {
        flex-direction: column-reverse;
        background-color: black;
    }
`
const MainLeftContainer = styled.section`
    padding-left: 12.5%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;

    h1 {
        font-size: 5em;
        font-weight: 700;
        color: white;
        margin-bottom: 15px;
        background-color: #152B4A;
        padding: 5px;
    }

    p {
        font-size: 1.3em;
        color: white;
        line-height: 1.3;
    }

    button {
        margin-top: 25px;
        width: 170px;
        padding: 12px 20px 12px 20px;
        font-size: 1em;
        font-weight: 700;
        color: #141414;
        cursor: pointer;
        border-radius: 20px;
    }

    @media (max-width: 650px) {
        padding-left: 0;
        padding-top: 10vh;
        width: 100%;
        height: 60%;
        align-items: center;
        justify-content: flex-start;

        h1 {
            font-size: 4em;
            margin-bottom: 15px;
        }

        p {
            font-size: 1.1em;
        }

        button {
            padding: 5px 10px 5px 10px;
        }
    }
`
const Image = styled.img`
    width: 50%;
    @media (max-width: 650px) {
        width: 60%;
    }
`
const MainRightContainer = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;

    @media (max-width: 650px) {
        padding-right: 0;
        padding-top: 10vh;
        width: 100%;
        height: 40%;
        justify-content: center;
    }
`
const AboutContainer = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(20,20,20);
    width: 100%;
    height: 100vh;   

    @media (max-width: 650px) {
        display: none;
    }
`
const AboutLeftContainer = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(1, 23, 49);

    h1 {
        font-size: 2.5em;
        font-weight: 700;
        color: white;
        margin-bottom: 5px;
    }

    p {
        margin-top: 15px;
        color: #ffffff;
        line-height: 1.5 !important;
        word-wrap: break-word; 
        hyphens: auto;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        width: 100%;

        h1 {
            font-size: 2em !important;
            text-align: center;
        }

        p {
            width: 70%;
        }
    }
`
const AboutText = styled.div`
    width: 50%;
`
const AboutRightContainer = styled.section`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    
    & > img {
        height: 100vh;
        width: 50%;
        opacity: 0.7;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        width: 100%;

        h1 {
            font-size: 2em !important;
            text-align: center;
        }

        p {
            width: 70%;
        }
    }
`
const Opcoes = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100vh;

    h2 {
        font-size: 1.3em;
        line-height: 1.3em;
        width: 40%;
        color: rgb(20, 20, 20);
        color: white;
    }

    .bar-festas, .viagens-passeios, .games-esportes, .estudos  {

        padding-left: 10px;
        & > img {
            width: 20%;
            margin-right: 5%;
            filter: invert(100%);
        }
    }

    .bar-festas {
        height: 32.5vh;
        align-items: flex-end;
        padding-bottom: 7vh;
    }

    .viagens-passeios, .games-esportes, .estudos {
        height: 22.5vh;
        align-items: center;
    }

    .bar-festas, .viagens-passeios {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: rgba(157, 207, 91, 0.7);
    }

    .games-esportes, .estudos {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25%;
        background-color: rgba(208, 255, 146, 0.7);
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`
const OpcoesMobile = styled.div`
    display: none;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;

    h2 {
        font-size: 1.5em;
        line-height: 1.3em;
        width: 40%;
        color: rgb(20, 20, 20);
        color: white;
    }

    .bar-festas, .viagens-passeios, .games-esportes, .estudos  {

        height: 25vh;
        width: 100%;
        padding-left: 5%;
        align-items: center;
        display: flex;
        justify-content: center;

        & > img {
            width: 25%;
            margin-right: 5%;
            filter: invert(100%);
        }
    }

    .bar-festas, .viagens-passeios {
        background-color: rgba(157, 207, 91, 0.7);
    }

    .games-esportes, .estudos {
        background-color: rgba(208, 255, 146, 0.7);
    }

    @media (max-width: 650px) {
        display: flex;
    }
`
const ContactContainer = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(20,20,20);
    width: 100%;
    height: 100vh; 

    h1 {
        font-size: 5em;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 5px;
    }

    p {
        color: #ffffff;
    }

    @media (max-width: 650px) {
        display: none;
    }
`
const LeftContainer = styled.section`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: rgba(208, 255, 146, 0.7);    
    background-color: rgb(173,173,173);
    padding-top: 10vh;

    h4 {
        font-size: 2em;
        font-weight: 700;
        color: rgb(20,20,20);
        margin-bottom: 5px;
    }

    p {
        font-size: 1.3em;
        color: white;
        line-height: 1.2;
    }

    button {
        margin-top: 25px;
        width: 180px;
        padding: 12px 20px 12px 20px;
        cursor: pointer;
        background-color: #3AA5E8;
        border: none;
        border-radius: 10px;
        font-size: 1em;
        font-weight: 700;
        color: #141414
    }

    @media (max-width: 650px) {
        padding-left: 0;
        width: 100%;
        height: 60%;
        align-items: center;
        justify-content: flex-start;

        h1 {
            font-size: 4em;
            margin-bottom: 15px;
        }

        p {
            font-size: 1.1em;
        }
    }
`
const RightContainer = styled.section`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 650px) {
        display: none;
    }
`
const SignUpContainer = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    display: ${props => (props.isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 5;  
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background-color: rgb(167, 203, 255);

    h1 {
        color: rgb(20,20,20);
        font-size: 1.3em;
    }

    @media (max-width: 650px) {
        height: 100%;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }
`
const SignInContainer = styled.div`
    width: 50%;
    height: 90%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    display: ${props => (props.isOpen ? "flex" : "none")};
    justify-content: center;
    position: fixed;
    z-index: 5;  
    right: 0;
    bottom: 0;
    backdrop-filter: blur(15px);
    background-color: rgb(167, 203, 255);

    h1 {
        color: #000000;
        font-size: 1.3em;
    }

    @media (max-width: 650px) {
        height: 100%;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }
`
const RedesSociais = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 1.4em;
        color: white;
        margin-bottom: 15px;
    }

    .redes-img {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        & > a {
            img {
                width: 10%;
                filter: invert(100%);
                cursor: pointer;
            }
        }

        .instagram {
            margin-right: 20px;
        }
    }
`
const Equipe = styled.div`
    
`
const AboutContainerMobile = styled.div`
    display: none;
    width: 100%;
    height: 100vh;
    padding-top: 10vh;
    background-color: rgb(1, 23, 49);

    & > img {
        width: 100vw;
        height: 40%;
        opacity: 0.5;
    }

    & > div {

        width: 70%;
        color: white;
        margin-bottom: 10vh;
        text-align: center;

        h1 {
            font-size: 2.5em;
            font-weight: 700;
            line-height: 1.3em;
        }

        p {
            margin-top: 20px;
            font-size: 1.2em;
            line-height: 1.6em;
            word-wrap: break-word; 
            hyphens: auto;
        }
    }

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
`
const EventsContainerMobile = styled.div`
    display: none;
    width: 100%;
    height: 100vh;
    background-color: rgb(20,20,20);

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
`
const ContactContainerMobile = styled.div`
    width: 100%;
    height: 100vh;
    display: none;
    background-color: rgb(173,173,173);
    
    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`