import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState({
        use:null,
        token:"",
    })
    // defaults axios
    axios.defaults.headers.common['Authorization']= auth?.token
    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            const parsedata = JSON.parse(data)
            setAuth({
                ...auth,
                user:parsedata.user,
                token:parsedata.token
            })
        }
    },[])
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
// custom hook
const useAuth = () => useContext(AuthContext)
export{useAuth, AuthProvider}