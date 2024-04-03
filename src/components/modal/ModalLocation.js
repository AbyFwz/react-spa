import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useLocalStorage, useSetLocalStorage } from '../../contexts/LocalStorageContext';
import { useParams } from 'react-router-dom';

function ModalLocation({show, handleClose}) {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [location, setLocation] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const { storedData } = useLocalStorage();
    const setStoredData = useSetLocalStorage();
    const fetch = useFetch();

    const handleFetch = () => {
        fetch(
            {url: "https://rickandmortyapi.com/api/location", method:"GET"}
        ).then((resp) => {
            setData(resp.data.results);
        }).catch((err) => {
            setData([]);
        });
    }

    useEffect(() => {
        handleFetch();
    }, [])

    const handleSetData = () => {
        setStoredData(id, location);
        setShowPopup(true);
        setTimeout(() => {
            handleClose();
        }, 1500);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Alert show={showPopup} variant="success" onClose={() => setShowPopup(false)}>
                    Data submitted successfully!
                </Alert>
                <Modal.Header closeButton>
                    <Modal.Title>Add Character to Specific Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Location</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setLocation(e.target.value)}>
                                {data?.map((item) => {
                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSetData}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalLocation
