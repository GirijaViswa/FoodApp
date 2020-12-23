import React,{useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [LoggedIn,setLogin] = useState(false);
    
    return(
        <UserContext.Provider value={[LoggedIn,setLogin]}>
            {props.children}
        </UserContext.Provider>
    );
}