import { useContext } from "react"
import { Footer } from "../components/footer/footer"
import { Header } from "../components/header/header"
import { ProfileEdit } from "../components/PerfilComponents/profile-auth-edit/ProfileEdit"
import { Premium } from "../components/premium-users/premium"
import {JobSearch}  from "../components/search-bar/search"
import { Topics } from "../components/topics/Topics"
import { User } from "../components/user-auth-bar/user"
import { Context } from "../context/Contex"


export const Home = () => {

    const auth = useContext(Context)
    
    return (
        <>  
   
            <Header />
            {auth.user && <User />}
            <JobSearch.Search />
            <Topics />
            <Premium />
            <Footer />
        </>
 
        )
    
}