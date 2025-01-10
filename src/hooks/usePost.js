import { useEffect , useState } from "react";

export default function usePost(){
    const[posts , setPosts] = useState({});
    
    async function fetchPost(){
        const response = await fetch("api/v1/posts");
        const json = await response.json();
    }
    
    useEffect(() => {
        fetchPost();
    },[])
    
    return posts;

}