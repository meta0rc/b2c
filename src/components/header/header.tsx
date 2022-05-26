import './header.css'
import "@fontsource/roboto";
import { Nav } from '../nav/nav';
import { ProfileEdit } from '../PerfilComponents/profile-auth-edit/ProfileEdit'
import { useNavigate } from 'react-router-dom';
import { JobSearch } from '../search-bar/search';
import { Logo } from '../logo/logo';


export const Header = () => {
 
const navigate = useNavigate()

const dynamic = document.URL.includes('perfil') ? 'perfil-toggle' : 'toggle-commum';
const burger_dy = document.URL.includes('perfil') ? 'perfil-burger' : 'burger-commum';

    return (
    
        <header>
            <Logo />

            <Nav id={dynamic} burger={burger_dy} />
        
            <ProfileEdit />
        </header>
       
     
    )
}