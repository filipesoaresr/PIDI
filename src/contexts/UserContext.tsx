import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";


interface User {
    id: string;
    name: string;
    birthDate: Date;
    dateCreated: Date;
    sex: string;
    role: string;
    phone: string;
    username: string;
    cpf: string;
    email: string;
    password: string;
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
    const [sex, setSex] = useState('');
    const [phone, setPhone] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');

    
    function getUsers() {
        api.get('/users').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setUsers(response.data)
        })
    }

    useEffect(() => {
        
        getUsers();
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
            sex,
            setSex,
            phone,
            setPhone,
            dateCreated,
            setDateCreated,
            email,
            setEmail,
            role,
            setRole,
            username,
            setUsername,
            password,
            setPassword,
            confirmedPassword,
            setconfirmedPassword,
            getUsers
        }}>
            {children}
        </UserContext.Provider>
    )

}