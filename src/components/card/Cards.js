import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Cards({id, image, name}) {
    const navigate = useNavigate();
    return (
        <Button variant='outline-dark' onClick={() => {navigate(`/character-details/${id}`)}} className='p-0 m-1'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><center>{name}</center></Card.Title>
                </Card.Body>
            </Card>
        </Button>
    )
}

export default Cards