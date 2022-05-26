import { Logo } from "../logo/logo"
import './footer.css'
export const Footer = () => {
    return (
    <>
       <footer>
            <Logo />
            <div className="copy">
                <p>&copy; - B.I.A - Serviços e Relaciomentos - 2022  </p> 
                <p>Desenvolvido por - Gabriel Elias - Todos os direitos reservados</p>
            </div>
       </footer>
        
    </>
    )
}