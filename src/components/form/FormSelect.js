import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Form } from 'react-bootstrap';

function FormSelect() {
    const fetch = useFetch();
    const [data, setData] = useState([]);

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

    return (
        <Form.Select aria-label="Default select example">
            {data?.map((item) => {
                return (<option key={item.id} value={item.id}>{item.name}</option>)
            })}
        </Form.Select>
    )
}

export default FormSelect