import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch({url, payload, method}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = () => {
        axios({
            method,
            url,
            data: {
                payload
            }
        }).then((resp) => {
            setData(resp.data.results);
        }).catch((err) => {
            return err;
        });
    };

    useEffect(() => {
        fetchData();
    }, [payload]);

    return {data, isLoading};
}

export default useFetch