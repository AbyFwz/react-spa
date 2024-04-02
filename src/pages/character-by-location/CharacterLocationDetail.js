import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { Row } from 'react-bootstrap';

function CharacterLocationDetail() {
    const {id} = useParams();
    const {data} = useFetch(id);
    return (
        <>
            <Row>

            </Row>
        </>
    )
}

export default CharacterLocationDetail