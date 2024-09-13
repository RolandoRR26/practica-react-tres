import { useState, useEffect} from "react";
import axios from "axios";


const useFetchCats = () =>{

    const [cats, setCats] = useState([]);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(0);
    const endPoint = "https://api.thecatapi.com/v1/images/search"; //endpoint para una imagen random

    useEffect(() => {

        const fetchCats = async () =>{
            
            try {
                axios.defaults.headers.common['x-api-key'] = "live_T7ezaQhHaVtsA0PX92a5icWZVIoEiMTtGYXBc6hGs551cD8WlKypdJniYu0gNhrN"
                const response = await axios.get(endPoint, { params: { limit: 1, size:"full" } });
                console.log(response);
                setCats(response.data);

            } catch(error){
                console.log(error);
                setError(error);
            }
        } 

        fetchCats();

    }, [refresh]);

    const handleRefresh = () =>{
        setRefresh(prev => prev + 1);
    }
    console.log(refresh);

    return { cats , error, handleRefresh };

};

export default useFetchCats;


