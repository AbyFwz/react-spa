import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Cards({id, image, name}) {
    const navigate = useNavigate();
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button variant="primary" onClick={() => {navigate(`/character-details/${id}`)}}>Character Details</Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default Cards