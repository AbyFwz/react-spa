import axios from 'axios'

function useFetch() {
    const fetch = ({url, method, payload}) => {
        return new Promise((resolve, reject) => {
            axios({
                method,
                url,
                data: {
                    payload
                }
            }).then((resp) => {
                resolve(resp);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    return fetch;
}

export default useFetch