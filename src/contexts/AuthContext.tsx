import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { useHistory } from "react-router-dom";


type User = {
    username: string;
}

type Token = {
    token: string;
}

type SignInCredentials = {
    username: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    user?: User;
    isAuthenticated: boolean;
    token?: Token;
    setToken?: (token: Token) => void;
};

type AuthProviderProps = {
    children: ReactNode;
}



export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>();
    const [token, setToken] = useState<Token>();
    const isAuthenticated = !!user;

    let history = useHistory();

    async function signIn({ username, password }: SignInCredentials) {

        try {
            const response = await api.post("/users/authenticate", {
                username,
                password
            })

            const { token, refreshToken } = response.data;

            setToken({ token })
            localStorage.setItem("token", token)

            if (token) {
                history.push("/products");
            }
            else {
                console.log("Sem Autorização")
            }

            console.log("============ AQUIIIIIIIIIIII", response.data);

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            isAuthenticated,
            user,
            token,
            setToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}