import API_GMAIL from "../services/api";
import { useState } from "react";



//when we call a API_GMAIL we get many information as 'response header', ' request header'.

const useApi = (urlObject) =>{
    const [response ,setResponse]  = useState(null)
    const [error , setError]  = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const call = async (payload,type='') =>{
        setResponse(null);
        setError("");
        setIsLoading(true);
        try {
           let res = await API_GMAIL(urlObject, payload,type);
           setResponse(res.data);
        } catch (error) {
            setError(error.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    return {call,error,response,isLoading}
}
export default useApi;