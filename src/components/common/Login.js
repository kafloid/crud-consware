import React, { useState } from 'react';
import { Stack, Container, Form, Button } from "react-bootstrap";
import '../css/sign.css'

import firebaseApp from '../../FireCred';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function Login() {

    //almacenar estado de los campos de registro o inicio
    const [registrar, setRegistrar] = useState(false);

    //manejar el tipo de acción
    async function submitHandler(e) {
        e.preventDefault();
        //almacenar datos de los campos  
        const correo = e.target.inputBasicEmail.value;
        const contra = e.target.inputBasicPassword.value;
        if (registrar) {
            //en caso de registrarse
            const usuario = await createUserWithEmailAndPassword(auth, correo, contra);
        } else {
            //en caso de iniciar sesión
            signInWithEmailAndPassword(auth, correo, contra);
        }
    }

    return (
        <Container>
            <Stack>
                <form onSubmit={submitHandler} className="login-page">
                    <div className="form">
                        <h1>{registrar ? "Registrate" : "Inicia Sesión"}</h1>
                        <div>
                            <input type="text" id="inputBasicEmail" placeholder="E-mail Address" />
                            <input type="password" id="inputBasicPassword" placeholder="Password" />
                            <button type="submit" >
                                {registrar ? "Registrate" : "inicia sesión"}
                            </button>
                            <h1> </h1>
                            <button onClick={() => setRegistrar(!registrar)}>
                                {registrar ? "¿Tienes cuenta? Inicia Sesión" : "¿No tienes cuenta? Registrate"}
                            </button>
                        </div>
                    </div>
                </form>

            </Stack>
        </Container>
    );
}

export default Login;
