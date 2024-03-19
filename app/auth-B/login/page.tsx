'use client'
import { Avatar, Checkbox, Container, FormControlLabel, Link, TextField } from "@mui/material";
import { Grid, Paper, Button, Typography } from "@mui/material";
import facebook from "../../assets/asset-facebook.png";
import google from "../../assets/asset-google.png";
import github from "../../assets/asset-github.png";
import backgroundImage from "../../assets/asset-avion.png";
import { blue } from "@mui/material/colors";


export default function Login() {


    const paperStyle = { padding: 20, height: '70vh', width: "50%", margin: "7% auto" }
    const inputs = { margin: "10px auto" }
    const login = { 'margin-top': "20%" }
    const blueBackground = { backgroundColor: '#2377C5', height: '100vh', display: 'grid' };
    const title = { textAlign: 'center', fontWeight: 'bold', marginBottom: '40%' };
    const imgAvion = { alignSelf: 'center', marginTop: '30%' }
    return (
        <Grid container>
            <Grid item xs={6}>
                <Container style={paperStyle}>
                    <Typography variant="h4" component="h2" style={title}>
                        Iniciar sesión
                    </Typography>
                    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ 'margin-bottom': '7%' }}>
                        <Avatar alt="Imagen 1" src={facebook.src} style={{ margin: '10px' }} />
                        <Avatar alt="Imagen 2" src={google.src} style={{ margin: '10px' }} />
                        <Avatar alt="Imagen 3" src={github.src} style={{ margin: '10px' }} />
                    </Grid>
                    <TextField label="Email" placeholder="Email" type="password" fullWidth required variant="outlined" style={inputs} />
                    <TextField label="Contraseña" placeholder="Contraseña" type="password" fullWidth required variant="outlined" style={inputs} />
                    <FormControlLabel
                        control={
                            <Checkbox name="checkedB" color="primary" />

                        }
                        label="Recuerdame"
                    ></FormControlLabel>
                    <Button type="submit" color="primary" variant="contained" fullWidth style={{ ...inputs, backgroundColor: blue[500] }}>Iniciar sesión</Button>
                    <Typography style={login}>
                    <Link href="/auth-B/signin">¿No tienes una cuenta?</Link>
                        
                    </Typography>
                </Container>

            </Grid>
            <Grid item xs={6} style={blueBackground}>
                <img src={backgroundImage.src} style={imgAvion} alt="logo" />
                <div style={{ position: 'absolute', top: '25%', left: '74%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    <Typography variant="h4" component="h2" style={{ fontWeight: 'bold' }}>
                        Fabrica Escuela Airlines
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}