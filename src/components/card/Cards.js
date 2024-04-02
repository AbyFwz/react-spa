import React, { useEffect, useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ModalLocation from '../modal/ModalLocation';

function Cards({id, image, name, status, species, gender, origin, location, desc, button}) {
    const navigate = useNavigate();
    const [isContainDesc, setIsContainDesc] = useState(false);

    const [visModal, setVisModal] = useState(false);
    // const {data} = useFetch({url: , method: "GET"});
    // console.log(data);

    const handleClose = () => {
        setVisModal(false);
    }

    return (
        <Button variant='outline-dark' onClick={() => {navigate(`/character-details/${id}`)}} className='p-0 m-1'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><center>{name}</center></Card.Title>
                    {desc ?
                        <Card.Text className='justify-content-left align-items-left'>
                            <span>Status: {status}<br/></span>
                            <span>Species: {species}<br/></span>
                            <span>Gender: {gender}<br/></span>
                            <span>Origin (Base on Cartoon): {origin}<br/></span>
                            <span>Location (Base on Cartoon): {location}<br/></span>
                        </Card.Text>
                    : <></>
                    }
                </Card.Body>
                {button ?
                    <Card.Footer>
                        <ButtonGroup>
                            <Button variant='secondary' onClick={() => {navigate(-1)}}>Back</Button>
                            <Button variant='success' onClick={() => {setVisModal(true);}}>Add Character to Location</Button>
                        </ButtonGroup>
                    </Card.Footer>
                : <></>}
            </Card>
            {visModal && <ModalLocation show={visModal} handleClose={handleClose}/>}
        </Button>
    )
}

Cards.defaultProps = {
    desc: false,
    button: false
}

export default Cards