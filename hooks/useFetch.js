import { useState, useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY} from '@env'

const apiKey = RAPID_API_KEY
console.log(RAPID_API_KEY)
console.log('Api_key --->',apiKey)

const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
         
        try {
            const response = await axios.request(options);
            // console.log(response)
            setData(response.data.data) // takes the actual data from response object
            setIsLoading(false)
        } catch(error){
            setError(error)
            alert('We have a little problem :/')
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
      fetchData()    
    }, [])

    // reftech function
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, isLoading, error, refetch}
    
}

export default useFetch