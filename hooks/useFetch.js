import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { API_KEY } from '../constants/Keys';
const useFetch = (searchTerm, ) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    const getData = async()=>{
        setIsLoading(true);
        try{
            const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`);
            setData(response);
            setIsLoading(false);
        }
        catch(err){
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        getData();
    },[])
    
    return {data, error, isLoading};
}

export default useFetch;
