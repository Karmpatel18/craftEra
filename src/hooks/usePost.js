import { useEffect } from "@klarr-agency/circum-icons-react";

export default function usePost(){
    
    async function fetchPost(){
        const response = await fetch("api/v1/posts");
        const json = response.json();
    }
    
    useEffect(() => {
        fetchPost();
    },[])
}