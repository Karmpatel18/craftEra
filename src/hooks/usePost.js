/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react";

export default function useFetch(url){
    const[finalData , setFinalData] = useState({});
    
    async function fetchPost(){
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
    }
    
    useEffect(() => {
        fetchPost();
    },[]);
    
    return {
        finalData
    }

}