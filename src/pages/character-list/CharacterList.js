import React, { useEffect, useState } from 'react'
import Cards from '../../components/card'
import useFetch from '../../hooks/useFetch'
import { Col, Row } from 'react-bootstrap';

function CharacterList() {
  const fetch = useFetch();
  // const {data} = useFetch({url: "https://rickandmortyapi.com/api/character", method: "GET"});
  const [data, setData] = useState([]);

  const handleFetch = () => {
    fetch({url: "https://rickandmortyapi.com/api/character", method: "GET"}).then((resp) => {
      setData(resp.data.results);
    }).catch((err) => {
      setData([]);
    });
  }

  useEffect(() => {
    handleFetch();
  })

  return (
    <>
      <Row>
        {data?.map((item) => {
          return (
          <Col key={item.id} >
            <Cards id={item.id} image={item.image} name={item.name} />
          </Col>)
        })}
      </Row>
    </>
  )
}

export default CharacterList