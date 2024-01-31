
import { createContext, useState } from "react";

export const user = createContext({});
export default function UserProvider({children}){
    const[Auth,setauth] = useState({})
    return <user.Provider value={{Auth,setauth}}>
        {children}
        </user.Provider>
}
