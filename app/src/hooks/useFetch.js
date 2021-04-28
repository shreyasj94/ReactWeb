import {useState, useEffect} from 'react';

// Custom hook, they should always start with 'use'
export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    // Called -> Everytime component is rendered
    useEffect(() => {

        const abortCont = new AbortController(); // use to cancel a fetch

        fetch(url, {signal: abortCont.signal})
            .then(response => {
                if(!response.ok) {
                    setLoading(false)
                    throw Error("Unable to fetch data")
                }
                return response.json()
            }) // returns a promise
            .then( (data) => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch( e => {
                if(e.name === 'AbortError'){
                    console.log("Fetch Aborted")
                } else {
                    setError(e.message)
                    setLoading(false)
                }
            })

        return  () => abortCont.abort(); // aborts the fetch
    }, [url]) // [] -> avoids re-render, i.e. will only runs once if url changes

    return {
        data,
        isLoading,
        error
    }
}