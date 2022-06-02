import { createContext } from "react";
import { User } from '../types/User'

export type AuthContext = {
    user: User | null,
    getID: String | null
    setIDTOGet: (id: String) => void
    login: (email: string, password: string) => Promise<boolean>
    logout: () => void
    PerfilImage: (formData : FormData) => Promise<boolean>
    RegisterUser: (FormData: FormData)=> Promise<boolean>

}

export const Context = createContext<AuthContext>(null!)