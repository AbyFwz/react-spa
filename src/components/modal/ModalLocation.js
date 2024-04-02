import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Button, Modal } from 'react-bootstrap';

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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default ModalLocation