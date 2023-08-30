import { useState, useEffect } from "react";




const useFetch = (url) => {

    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null) 

    useEffect( () => {

        const abortCont= new AbortController()
        // put coments

        fetch(url, {signal : abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data hermano')
            }
            return res.json()
        })
        .then(data =>{ 
            console.log(data)
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err =>{
            if(err.name === "AbortError"){
                console.log('fetch aborted')
                console.log(err.name)
            }else{
                setIsPending(false)
                setError(err.message)
                console.log(err.message + " coloquei no log")
            }            
        });
    },[url])
    return { data, isPending, error}
    //lembrar de onde e` esse return
}

export default useFetch