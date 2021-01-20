import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal : abortController.signal })
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
                if(err === "AbortError") {

                }
                else {
                    setError(error.message);
                    setIsPending(false);
                }
            });
            return () => abortController.abort();
    }, [url]);

    return {data, isPending, error};
}
export default useFetch;