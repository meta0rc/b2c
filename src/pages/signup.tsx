import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/form.css'
import { Logo } from '../components/logo/logo'
import { Context } from '../context/Contex'
import { useNavigate } from 'react-router-dom'
// import '../assets/js/cadform'

export const Signup = () => {


    const provider = useContext(Context)
    const [values, setValues] = useState<any>()
    const navigate = useNavigate()

    
    const handleSubmit = async (e:any) => {
       
        e.preventDefault()

        const res = await provider.RegisterUser(values)
        if(res){
            alert("Usuário Criado");
            navigate('/login');
        }
        else { 
            alert("Endereço de email já cadastrado, tente novamente")
        }
        
        console.log(res);


    }

    const onChange = (e:any) => {
        
        const { name, value } = e.target

        setValues({ ...values, [name]: value})

    }
    return (

        <>
                
        <section className="loginSection">
        <div className="containerInitialcontact" id="container-signin">
                    <h2 className="h2-mobile">
                            Saiba mais 
                        </h2>
                    <div className="container-content-initial-content" id="container-initial-signin">
                        
                        <h1>
                            Faça já o seu cadastro e desfrute dos melhores recursos para relaciomentos <span>B2C</span> ofericidos pela B.I.A
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum omnis accusamus   dolores. Temporibus distinctio nemo ius
                        </p>
                        <button className="btn-info">
                            Saiba Mais
                        </button>
                    </div>
                </div>
                <div className="app app-form">
                    <div className="logo">
                        <Logo />
                    </div>
                   
                    <form className="form-data" id='form-data-app'
                    onSubmit={handleSubmit}
                    encType='multipart/form-data'>

                        <input type="text" name="name" id="name" placeholder='Nome Completo' onChange={onChange} />
                        
                        <input type="text" name="email" id="email" placeholder='Email de login' onChange={onChange} />
    
                        <input type="password" name="password" id="password" placeholder='Digite uma senha' onChange={onChange} />
    
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirme a senha' onChange={onChange} />
    
                        <input type="text" name="job" id="job" placeholder='Profissão' onChange={onChange} />
    
                        <input type="text" name="geo" id="geo" placeholder='Região de atendimento' onChange={onChange} />
    
    
                        {/* <div className="checkout-premium-add" id="checkout">
                            <button className='btn-enviar'>
                                Pagar premium
                            </button>
                        </div> */}
        
                        <button type="submit" className="btn-enviar " id="btnSign">
                            Enviar
                        </button>
                       
                        </form>
                        <div className="options-form" id="signOptions">
                        <div className="more-options-form" >
                            <Link className="fonts" to='/login' >
                                Entrar
                            </Link>
                            <Link className="fonts" to='/Help' >
                                Suporte
                            </Link>
                        </div>
                    </div>
                </div>
                
        </section>
              
                
        </>
    )

}