import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styled from 'styled-components';

export default function FaleConoscoPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);
    };

    return (
        <FaleConoscoContainer>        
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="center">
                    <Typography variant="h4" gutterBottom>
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
        </FaleConoscoContainer>
    );
}

const FaleConoscoContainer = styled.div`

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