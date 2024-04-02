import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Button, Form, Modal } from 'react-bootstrap';
import FormSelect from '../form/FormSelect';

function ModalLocation({show, handleClose}) {
    const [data, setData] = useState([]);
    const fetch = useFetch();

    useEffect(() => {
        fetch({url:"https://rickandmortyapi.com/api/location", method:"GET" }).then((resp) => {
            console.log(resp);
        });
    }, []);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Character to Spesific Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Location</Form.Label>
                            <FormSelect />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalLocation