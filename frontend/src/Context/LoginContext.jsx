import {createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        //To Do
        setCurrentUser({
            id:1,
            name: "User",
            profilePic: "https://cdn.pixabay.com/photo/2023/04/20/20/22/robin-7940556_960_720.jpg"
        })
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