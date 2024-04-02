import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Cards({id, image, name, status, species, gender, originName, originUrl, locationName, locationUrl}) {
    const navigate = useNavigate();
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <span>Status: {status}<br/></span>
                <span>Species: {species}<br/></span>
                <span>Gender: {gender}<br/></span>
                <span>Origin: {originName}<br/></span>
                <span>Origin: {locationName}<br/></span>
            </Card.Text>
            <Button variant="primary" onClick={() => {navigate(`/character-details/${id}`)}}>Character Details</Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default Cards