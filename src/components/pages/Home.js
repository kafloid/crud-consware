import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import firebaseApp from '../../FireCred';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//componentes
import AgregatTarea from '../AgregarTarea';
import ListadoTarea from '../ListadoTarea';

//constantes firebase
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


function Home({ correoUsuario }) {


    const [arrayTodos, setArrayTodos] = useState(null);

    const dummyData = [
        { id: 1, descripcion: 'tarea falsa uno' },
        { id: 2, descripcion: 'tarea falsa dos' },
        { id: 3, descripcion: 'tarea falsa tres' },
    ]

    async function buscarOCrearDocumento(idDocumento) {
        const docRef = doc(firestore, `users/${idDocumento}`);
        //buscar documento
        const query = await getDoc(docRef);
        //revisar si existe
        if (query.exists()) {
            //en caso de existir
            const infoDoc = query.data();
            return infoDoc.todos;
        } else {
            //en caso contrario
            await setDoc(docRef, { todos: [...dummyData] });
            const infoDoc = query.data();
            return infoDoc.todos;
        }
    }

    useEffect(() => {
        async function fetchTodos() {
            const todosObtenidos = await buscarOCrearDocumento(correoUsuario);
            setArrayTodos(todosObtenidos);
        }

        fetchTodos();

    }, [])

    return (
        <Container>
            <h4>
                hola, sesion activa
            </h4>
            <Button onClick={() => signOut(auth)}>Cerrar Sesión</Button>
            <hr />
            <AgregatTarea
                arrayTodos={arrayTodos}
                setArrayTodos={setArrayTodos}
                correoUsuario={correoUsuario}
            />
            {arrayTodos ? (
                <ListadoTarea
                    arrayTodos={arrayTodos}
                    setArrayTodos={setArrayTodos}
                    correoUsuario={correoUsuario}
                />
            ) : null}
        </Container>
    );
}

export default Home;
