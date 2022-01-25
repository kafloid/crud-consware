import React from 'react';
import { Col, Container, Stack, Row } from 'react-bootstrap';

import EliminarTarea from '../EliminarTarea';



function ListadoTarea({ arrayTodos, correoUsuario, setArrayTodos }) {

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
                                    <EliminarTarea
                                        arrayTodos={arrayTodos}
                                        correoUsuario={correoUsuario}
                                        setArrayTodos={setArrayTodos}
                                        objetoTarea={objetoTarea}
                                    />
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
