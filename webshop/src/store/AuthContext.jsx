import { useState } from "react";
import { createContext } from "react";


// selle kaudu saan teda importides globaalseid muutujaid kätte
export const AuthContext = createContext();

//provider määrab globaalsust mis tasemel muutujad kättesaadavad on
export const AuthContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") === "token123");

    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}