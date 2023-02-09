import { createContext, useState } from "react";
import dataApi from "../api/dataApi";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

const LoginProvider = ({children}) => {

    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(values.email === "" || values.password === ""){
            return toast.error("Todos los campos son requeridos", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        try{
            const res = await dataApi.post('/auth/login', 
            {user: values.email, password: values.password});

            const { data } = res;
            // console.log(data);
            localStorage.setItem('token', data.token);
            
            if(data.token){
                return navigate("/chat");
            }

        }catch(err) {
            const { response } = err;
            toast.error(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        

    }

    const data = {
        values,
        handleChange,
        handleSubmit
    }

    return(
        <LoginContext.Provider
            value={data}
        >
            {children}
        </LoginContext.Provider>
    )
}

export {LoginProvider};
export default LoginContext;