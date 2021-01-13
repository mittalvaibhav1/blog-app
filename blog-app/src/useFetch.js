import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if(!res.ok) {
                    throw Error('Could not fetch Data');
                }
                return res.json();
            })
            .then((data) => {
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
            });
    }, [url]);
    return {data, isPending, error};
}
export default useFetch;