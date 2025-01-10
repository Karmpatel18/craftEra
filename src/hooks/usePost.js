import { useEffect } from "react";

export default function usePost(){
    
    async function fetchPost(){
        const response = await fetch("api/v1/posts");
        const json = await response.json();
    }
    
    useEffect(() => {
        fetchPost();
    },[])
}