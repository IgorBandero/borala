import styled from "styled-components";

export default function Footer(){

    return (
        <FooterContainer>

        </FooterContainer>
    )
}

const FooterContainer = styled.header`
    background: rgb(30, 30, 30);
    height: 12.5%;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    position: fixed;
    padding-left: 8.3%;
    padding-right: 8.3%;
    border-bottom: 1px solid gray;
    z-index: 1;   
    bottom: 0; 
`