import React, { useEffect, useState } from 'react'
import { Button, Col, Figure, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import ModalLocation from '../../components/modal/ModalLocation';

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
                <div>Is Loading</div>
            :
                <>
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
                    <Button onClick={() => {
                        setVisModal(true);
                    }} />
                    {visModal && <ModalLocation show={visModal} handleClose={handleClose}/>}
                </>
            }
        </>
    )
}

export default CharacterDetail