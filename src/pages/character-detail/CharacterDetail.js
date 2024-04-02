import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Figure, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import ModalLocation from '../../components/modal/ModalLocation';
import Loading from '../../components/loading/Loading';

function CharacterDetail() {
    const fetch = useFetch();
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [visModal, setVisModal] = useState(false);
    // const {data} = useFetch({url: , method: "GET"});
    // console.log(data);

    const handleClose = () => {
        setVisModal(false);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch({url: `https://rickandmortyapi.com/api/character/${id}`, method: "GET"}).then((resp) => {
            setData(resp.data);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
        });
    }, [])
    return (
        <>
            {isLoading ?
                <Loading />
            :
                <Container fluid>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={data.image}
                                />
                                <Figure.Caption>
                                <span>Status: {data.status}<br/></span>
                                    <span>Species: {data.species}<br/></span>
                                    <span>Gender: {data.gender}<br/></span>
                                    <span>Origin: {data.origin?.name}<br/></span>
                                    <span>Location: {data.location?.name}<br/></span>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonGroup size='lg'>
                                <Button variant='secondary' onClick={() => {navigate(-1)}}>Back</Button>
                                <Button variant='success' onClick={() => {setVisModal(true);}}>Add Character to Location</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>

                    {visModal && <ModalLocation show={visModal} handleClose={handleClose}/>}
                </Container>
            }
        </>
    )
}

export default CharacterDetail