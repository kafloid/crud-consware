import React from 'react';
import { Button, Col, Container, Stack, Row } from 'react-bootstrap';

import firebaseApp from '../FireCred';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

function ListadoTarea({ arrayTodos, correoUsuario, setArrayTodos }) {

    async function eliminarTarea(idTarea) {
        const newArrayTodos = arrayTodos.filter((objetoTarea) => objetoTarea.id !== idTarea);
        const docRef = doc(firestore, `users/${correoUsuario}`);
        updateDoc(docRef, { todos: [...newArrayTodos] });
        //Actualizar state
        setArrayTodos(newArrayTodos);
    }
    return (
        <Container>
            <Stack>
                {arrayTodos.map((objetoTarea) => {
                    return (
                        <>
                            <Row>
                                <Col>
                                    {objetoTarea.descripcion}
                                </Col>
                                <Col>
                                    <Button onClick={() => eliminarTarea(objetoTarea.id)}>Eliminar Tarea</Button>
                                </Col>
                            </Row>
                            <hr />
                        </>
                    )
                })}
            </Stack>
        </Container>
    );
}

export default ListadoTarea;
