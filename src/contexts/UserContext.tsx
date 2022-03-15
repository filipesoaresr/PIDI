import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";


interface User {
    _id: string;
    name: string;
    dateCreated: Date;
    phone: string;
    login: string;
    cpf: string;
}


interface UserProviderProps {
    children: ReactNode;
}


export const UserContext = createContext<any>([]);

export function UserProvider({children}: UserProviderProps) {

    const [users, setUsers] = useState<User[]>([])
   
    const [id, setId] = useState('');

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');

    useEffect(() => {
        api.get('/users')
        .then(response => {
            setUsers(response.data);
        })
        
    }, [])

    return (
        <UserContext.Provider value={{
            users,
            setUsers,
            id,
            setId,
            name,
            setName,
            cpf,
            setCpf,
            birthDate,
            setBirthDate,
            gender,
            setGender,
            phone,
            setPhone,
            dateCreated,
            setDateCreated,
            email,
            setEmail,
            role,
            setRole,
            login,
            setLogin,
            password,
            setPassword,
            confirmedPassword,
            setconfirmedPassword
        }}>
            {children}
        </UserContext.Provider>
    )

}