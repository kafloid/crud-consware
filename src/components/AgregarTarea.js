import React from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

import firebaseApp from '../FireCred';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

function AgregarTarea({ correoUsuario, setArrayTodos, arrayTodos }) {

  async function agregarTarea(e) {
    e.preventDefault();
    const descripcion = e.target.formDescripcion.value;

    const newArrayTodos = [...arrayTodos, {id: + new Date(), descripcion: descripcion},];

    //actualizar bdd
    const docRef = doc(firestore, `users/${correoUsuario}`);
    updateDoc(docRef, { todos: [...newArrayTodos]});

    //actualizar estado
    setArrayTodos(newArrayTodos);
    e.target.formDescripcion.value = '';
  }

  return (
    <Container>
      <Form onSubmit={agregarTarea}>
        <Row>
          <Col><Form.Control type="text" placeholder="Describe tu tarea" id="formDescripcion"/></Col>
          <Col><Button type="submit"> Agregar Tarea</Button></Col>
        </Row>
        <hr/>
      </Form>
    </Container>
  );
}

export default AgregarTarea;
