import React, {useEffect} from "react";
import axios from 'axios'

function Home () {
    axios.defaults.withCredentials =true;
    useEffect(()=> {
        axios.get('https://reset-password-backend-api.onrender.com/home')
        .then(result => {console.log(result)
            if(result.data !== "Success"){
                // navigate('/login')
            }
        })
        .catch(err=> console.log(err))
       
    },[])
    return (
        <h2>Home Componenet</h2>
    )
}
export  default Home;