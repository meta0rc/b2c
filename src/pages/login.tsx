import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/form.css'
import Background from '../assets/images/statics/vetor.jpg'
import { Logo } from '../components/logo/logo'
import { Context } from '../context/Contex'


export const Login = () => {

    const navigate = useNavigate()
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const auth = useContext(Context)

    const handleLogin = async () => {
       const response = await auth.login(email, pass) 
       if(response == true){
           navigate('/')
       }
    }

    return (
      <>
        <section className="loginSection">

        <div className="app">
            <Logo />

            <div className="form-data">
                <input 
                type="text" 
                name="Email" 
                id="email" 
                placeholder='Email' 
                onChange={e => setEmail(e.target.value)} 
                />

                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Password' 
                onChange={e => setPass(e.target.value)} />
                
                
            </div>
            <div className="options-form">
                <div className="remember">
                    <input type="checkbox"  name="check" id="check" />
                    <label className="fonts" htmlFor="check">Lembrar</label>
                </div>
                <div className="more-options-form">
                    <Link className="fonts" to='/forget' >
                       Esqueceu a senha?
                    </Link>
                    <Link className="fonts" to='/signup' >
                        Cadastrar
                    </Link>
                </div>
     

            </div>
                <button className="btn-enviar" onClick={handleLogin}>
                    Enviar
                </button>
        </div>
        <div className="containerInitialcontact">
              <h2 className="h2-mobile">
                    Saiba mais 
                </h2>
            <div className="container-content-initial-content">
              
                <h1>
                    Faça parte do mundo das conexões e relaciomentos <span>B2C</span> através da B.I.A
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum omnis accusamus dolores. Temporibus distinctio nemo ius
                </p>
                <button className="btn-info">
                    Saiba Mais
                </button>
            </div>
           
        </div>
        </section>

    </>
    )

}