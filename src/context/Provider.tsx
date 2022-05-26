import { useContext, useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"
import { User } from "../types/User"
import { Context } from "./Contex"

export const Provider = ({children} : {children: JSX.Element}) => {

 
    const api = useApi();
    const [user, setUser] = useState<User | null>(null)
    const store = localStorage.getItem('token')

    useEffect(()=> {

        const validateToken = async() => {
            if(store){
                const userValidated = await api.validateToken(store)
                if(userValidated){
                    setUser(userValidated)
                }
            }
        }

        validateToken()

    }, [document])

    const login = async (email: string, password: string) => {
        
       const res = await api.login(email, password)

       console.log(res)

       if(res.user){
           setUser(res.user)
           localStorage.setItem('token', res.user.token)
           return true;
       }
       return false;
    }

    const logout = async () => {
        setUser(null)
        localStorage.clear()
        await api.logout(); 
    }

    const PerfilImage = async (formData: FormData) => {

        const response = await api.EditPhoto(formData)
        console.log(response)
        return true;
        
    }

    const RegisterUser = async (values: Object) => {
        
        const response = await api.register(values)
        console.log(response)
        return true;

    }

    return(
        <Context.Provider value={ {user, login, logout, PerfilImage, RegisterUser}}>
            { children }
        </Context.Provider>
    )
}