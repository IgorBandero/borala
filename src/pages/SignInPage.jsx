import React from 'react';
import { useForm, Controller} from 'react-hook-form';
import { Container, TextField, Button, Typography, Box, Grid, Avatar, Link } from '@mui/material';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
    palette: {
        green: {
            main: 'rgb(193,255, 114)', 
            light: 'rgb(216, 255, 164)',
            dark: 'rgb(157, 207, 91)',
            contrastText: 'rgb(20,20,20)'
        },
        blue: {
            main: 'rgb(2, 94, 219);', 
            light: 'rgb(106, 153, 219)',
            dark: 'rgb(23, 67, 128)',
            contrastText: 'rgb(20, 20, 20)'
        }
    },
});

export default function SignInPage (props){

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    SignInPage.propTypes = {
        onButtonClick: PropTypes.func.isRequired,
    }

    const password = React.useRef({});
    password.current = watch("password", "");

    return (
        <SignInContainer>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" className="signin-page">
                    <Box
                        sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        }}>
                        <Avatar sx={{ m:1 }}></Avatar>
                        <Typography component="h1" variant="h5"> Entrar </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                        required: 'E-mail é obrigatório',
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            message: 'E-mail inválido',
                                        },
                                        }}
                                        render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="E-mail"
                                            error={!!errors.email}
                                            helperText={errors.email ? errors.email.message : ''}
                                            size="small"
                                        />)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Senha é obrigatória' }}
                                        render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Senha"
                                            type="password"
                                            error={!!errors.password}
                                            helperText={errors.password ? errors.password.message : ''}
                                            size="small"
                                        />)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                color="green"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, textTransform: 'none'}} >
                                Entrar
                            </Button>
                            <p className="signin-message"> Não tem conta? Faça o seu <Link underline="none" sx={{ cursor: "pointer" }} onClick={() => props.onButtonClick(true)}>cadastro</Link>.</p>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </SignInContainer>
    );
}

const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;

    .signin-message {
        font-size: 0.8em;
        color: black;
        text-align: center;
    }

    button {
        border-radius: 8px;
        font-weight: 700;
    }

    a {
        color: rgb(24, 88, 177);
        font-weight: 700;
    }

    @media (max-width: 650px) {
        padding-right: 0;
        width: 100%;
        height: 40%;
        justify-content: flex-end;
    }
`

