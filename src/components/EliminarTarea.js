import React from 'react';
import { Button } from 'react-bootstrap';
import firebaseApp from '../FireCred';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
const firestore = getFirestore(firebaseApp);

function EliminarTarea({ arrayTodos, correoUsuario, setArrayTodos, objetoTarea }) {

    async function eliminarTarea(idTarea) {
        const newArrayTodos = arrayTodos.filter((objetoTarea) => objetoTarea.id !== idTarea);
        const docRef = doc(firestore, `users/${correoUsuario}`);
        updateDoc(docRef, { todos: [...newArrayTodos] });
        //Actualizar state
        setArrayTodos(newArrayTodos);
    }

    return (
        <Button onClick={() => eliminarTarea(objetoTarea.id)}>Eliminar Tarea</Button>
    );
}

export default EliminarTarea;
