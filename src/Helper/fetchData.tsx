import { useNavigate } from "react-router-dom";

export const useFetchApi = () => {
    
    const navigate = useNavigate()

    const getData = async (url: string) => {
        try {

            const response = await fetch(url, {
                method: "GET",
                credentials: "include"
            });
            if (response.ok){
                navigate("/chatpage")
                return null
            }
            else if (response.status == 401){
                console.error("Authentication failed.")
                navigate("/signin")
                return null
            }
            else{
                console.error("Faiiled to ferch data.")
                navigate("/signin")
                return null
            }
        }
        catch(e){
            console.error("Network Error:", e)
            navigate("/error")
            return null
        }
    }
    return { getData }
}
