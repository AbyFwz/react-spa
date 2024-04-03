import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import Cards from '../../components/card';

function CharacterDetail() {
    const fetch = useFetch();
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = () => {
        setIsLoading(true);
        fetch(
            {url: `https://rickandmortyapi.com/api/character/${id}`, method: "GET"}
        ).then((resp) => {
            setData(resp.data);
            setIsLoading(false);
        }).catch((err) => {
            setData([]);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        handleFetch();
    }, [handleFetch])

    return (
        <>
            {isLoading ?
                <Loading />
            :
                <Row>
                    {/* <Col><span>{data.name}</span></Col> */}
                    <Col>
                        {data.length !== 0 ?
                            <Cards id={data.id} image={data.image} name={data.name} status={data.status} species={data.species} gender={data.gender} origin={data.origin.name} location={data.location.name} desc={true} button={true}/>
                        : <></> }
                    </Col>
                </Row>
            }
        </>
    )
}

export default CharacterDetail