import React from 'react';
import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Container, TextField, Button, Typography, Box, Grid, Avatar, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthApi from '../services/AuthApi';

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

export default function SignUpPage (props){

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm();

    const [isVisibleSignUp, setIsVisibleSignUp] = useState(true);

    const onSubmit = (data) => {
    
        setIsVisibleSignUp(false);
        let nome = data.name;
        let email = data.email;
        //let foto = data.photo;
        let senha = data.password;

        const promise = AuthApi.signup({nome, email, senha});

        promise.then(res => {
            //alert(res.data);
            console.log(res);
            //alert("Cadastro realizado com sucesso!");
        });
                
        promise.catch(res => {
            //alert(res.response.data);
            console.log(res);
            //alert("Erro no cadastro! E-mail já cadastrado.");
        });
    };

    SignUpPage.propTypes = {
        onButtonClick: PropTypes.func.isRequired,
    }

    const password = React.useRef({});
    password.current = watch("password", "");

    return (
        <>
            <Message isOpen={!isVisibleSignUp}>
                <h2> Cadastro realizado com sucesso! </h2>
            </Message>
            <SignUpContainer isOpen={isVisibleSignUp}>
                <Container component="main" maxWidth="xs" color="primary">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <Avatar sx={{ m:1 }}></Avatar>
                        <Typography component="h1" variant="h5"> Cadastre-se </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Nome é obrigatório' }}
                                        render={({ field }) => (
                                        <WhiteBorderTextField
                                            {...field}
                                            fullWidth
                                            label="Nome"
                                            autoFocus
                                            error={!!errors.name}
                                            helperText={errors.name ? errors.name.message : ''}
                                            variant="standard"
                                            size="small"
                                            color="primary"
                                        />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                        required: 'E-mail é obrigatório',
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
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
                                            variant="standard"
                                            size="small"
                                        />)}
                                    />
                                </Grid>
                                {/*
                                <Grid item xs={12} sx={{ mt: 1 }}>
                                    <Controller
                                        name="photo"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Foto"
                                                type="file"
                                                InputLabelProps={{ shrink: true }}
                                                variant="standard"
                                                size="small"
                                            />                        
                                        )}
                                    /> 
                                    </Grid> */}
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
                                            variant="standard"
                                            size="small"
                                        />)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                        required: 'Confirmação de senha é obrigatória',
                                        validate: (value) => {
                                            value == password || 'As senhas não coincidem' },
                                        }}
                                        render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Confirmar Senha"
                                            type="password"
                                            InputProps={{ inputProps: { minLength: 8 } }}
                                            error={!!errors.confirmPassword}
                                            helperText={
                                            errors.confirmPassword
                                                ? errors.confirmPassword.message
                                                : ''
                                            }
                                            variant="standard"
                                            size="small"
                                        />)}
                                    />
                                </Grid>
                            </Grid>
                            <ThemeProvider theme={theme}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="green"
                                    fullWidth                                
                                    sx={{ mt: 3, mb: 2, textTransform: 'none' }} >
                                    Cadastrar
                                </Button>
                                <p className="signup-message"> Já tem conta? Entre <Link underline="none" sx={{ cursor: "pointer"}} onClick={() => props.onButtonClick(true)}>aqui</Link></p>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Container>
            </SignUpContainer>
        </>
    );
}

const Message = styled.div`
    display: ${props => (props.isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    height: 100vh;
    h2 {
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        color: green;
        width: 70%;
        line-height: 30px;
    }

`

const SignUpContainer = styled.div`
    display: ${props => (props.isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    height: 100vh;

    .signup-message {
        font-size: 0.8em;
        color: black;
        text-align: center;
        display: none;
    }

    a {
        color: rgb(24, 88, 177);
        font-weight: 700;
    }

    button {
        border-radius: 8px;
        font-weight: 700;
    }

    @media (max-width: 650px) {
        padding-right: 0;
        width: 100%;
        height: 40%;
        justify-content: flex-end;
    }
`
const WhiteBorderTextField = styled(TextField)`
    /*
    & label.Mui-focused {
    color: white;
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
        border-color: white;
        }
    } 
    */
`
