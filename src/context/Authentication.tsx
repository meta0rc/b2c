import { useContext } from "react"
import { Login } from "../pages/login"
import { Context } from "./Contex"

export const Authentication = ({children}: {children: JSX.Element}) => {

    const auth = useContext(Context)

    if(!auth.user){
        return <Login />
    }

    return children 

}