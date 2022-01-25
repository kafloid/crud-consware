import React, { useState, useEffect } from 'react';
import firebaseApp from './FireCred';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//Paginas
import Home from './components/pages/Home';
import Login from './components/common/Login';

const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //caso sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //caso no loggeado
      setUsuarioGlobal(null);
    }
  });

  return (
    <>
      {usuarioGlobal ? <Home correoUsuario ={usuarioGlobal.email} /> : <Login />}
    </>
  );
}

export default App;
