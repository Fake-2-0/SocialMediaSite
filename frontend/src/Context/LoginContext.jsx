import axios from "axios";
import {createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        //   JSON.parse(localStorage.getItem("user")) ||
    );

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/loginAuth/login", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]); 

    return(
        <LoginContext.Provider value={{currentUser, login}}>
            {children}
        </LoginContext.Provider>
    );
};