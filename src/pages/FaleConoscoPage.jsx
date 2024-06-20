import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailServer from '../services/MailServer';


const theme = createTheme({
    palette: {
        darkgray: {
            main: 'rgb(20,20, 20)', 
            light: 'rgb(100, 100, 100)',
            dark: 'rgb(10, 10, 10)',
            contrastText: 'rgb(255,255,255)'
        }
    },
});

export default function FaleConoscoPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');   
    const [isVisibleForm, setIsVisibleForm] = useState(true); 

    const handleSubmit = (event) => {
        event.preventDefault();

        //console.log('Nome:', nome);
        //console.log('Email:', email);
        //console.log('Mensagem:', mensagem);

        setIsVisibleForm(false);

        const promise = MailServer.mailTo({nome, email, assunto, mensagem});

        promise.then(res => {
            alert(res.data);
            //console.log('Email enviado com sucesso');
            //console.log(res.data);
        });
                
        promise.catch(res => {
            alert(res.data);
            //console.error('Erro ao enviar o email');
            //console.log(res.data);
        });
    };

    return (
        <>
            <Message isOpen={!isVisibleForm}>
                <h2> Mensagem enviada! </h2>
                <p> Em breve entraremos em contato. </p>
            </Message>
            <FaleConoscoContainer isOpen={isVisibleForm}>     
                <ThemeProvider theme={theme}> 
                    <Container maxWidth="sm">
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h4" gutterBottom sx={{color: "darkgray"}}>
                                Fale Conosco
                            </Typography>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <TextField
                            label="Nome"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            size="small"
                            />
                            <TextField
                            label="E-mail"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="small"
                            />
                            <TextField
                            label="Assunto"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                            size="small"
                            />
                            <TextField
                            label="Mensagem"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            size="small"
                            />
                            <Box display="flex" justifyContent="center" size="small">
                                <Button sx={{ mt: 3, mb: 2, textTransform: 'none' }} type="submit" variant="contained" color="primary">
                                    Enviar
                                </Button>               
                            </Box>
                        </form>
                    </Container>
                </ThemeProvider>  
            </FaleConoscoContainer>
        </>
    );
}

const FaleConoscoContainer = styled.div`

    display: ${props => (props.isOpen ? "flex" : "none")};

    width: 80%;
    button {
        border-radius: 20px;
        font-weight: 700;
    }

    @media (max-width: 650px) {
        button {
            width: 50%;
        }
    }
`

const Message = styled.div`
    display: ${props => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h2 {
        font-size: 35px;
        text-align: center;
        font-weight: bold;
        color: green;
        line-height: 30px;
        margin-bottom: 15px;
    }
    p {
        color: black;
    }
`