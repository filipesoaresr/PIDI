import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext([]);


export function UserContextProvider({ children }) {

    const [users, setUsers] = useState();

    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    );
}