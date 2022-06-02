import { useContext, useEffect, useState } from 'react'
import { BsTextRight, BsFillPersonFill,  BsFillPersonLinesFill, BsFillGearFill ,BsAwardFill,BsArrowReturnLeft,BsFillHouseFill,
    BsWhatsapp } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Contex'
import { useApi } from '../../hooks/useApi'
import './nav.css'



export const Nav = (props: any) => {

    const navigate = useNavigate()
    
    const alterPlan = () => {
        
    }
    const handleConfigs = () => {

        const back:any = document.getElementById('back')
        const nav : any = document.getElementById('mobileNav')

        const containerEdit = document.getElementById('profile-edit-content')

        containerEdit?.classList.toggle('disabled-edit')


        back.style.display = 'none'
        nav.style.display = 'none'
    }

    const auth = useContext(Context)
    const api = useApi()
    const token: any = localStorage.getItem('token')

    const handleLogout = async () => {
        await auth.logout()
    }

    const togleMenu = () => {
      
        const bar = document.getElementById('bars')
        const menu = document.querySelector('.menu-togle')
        

        bar?.toggleAttribute('active-bar')
        menu?.toggleAttribute('menu-active')
        
    }


    const handleWahtsApp = async (option: Number) => {

        const num : any = auth.user?.num

        if(option == 1){
            //Ativa o WhatsApp
            const res = await api.updateWhatsApp(token, num, option)

            if(res){
                console.log(res)
            }
        }
        if(option == 0){

            const res = await api.updateWhatsApp(token, num, option)
            
        }

    }

    const [option, setOption] = useState<any>()
    const [valueWwp, setValueWwp] = useState<any>()

    useEffect(()=>{

        if(auth.user?.wwp == ''){
            setValueWwp('Ativar WhatsApp')
            setOption(1)
        }
        else{
            setValueWwp('Desativar WhatsApp')
            setOption(0)
        }

    }, [handleWahtsApp])

    

    return(
      
        <>
      
        <nav id="mobileNav" className={props.className} >
                <div className="burger-button" onClick={togleMenu} id={props.burger}>
                
                <BsTextRight style={{
                    fontSize: '24px',
                    transition: '1s',
                    
                }}
                id='bars'
                />
                        {/* <span></span>
                        <span></span>
                        <span></span> */}
                </div>
                
             

               
                <div className="menu-togle" id={props.id}>

                    {auth.user && (
                        <>
                        
                            <div className='auth-user-nav-mobile'
                            style={{

                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: '1px solid #ccc',
                                paddingBottom: '20px',
                                marginRight: '25px'

                            }}>

                               
                                <div className="prefil-image-edited-cont" style={{
                                    backgroundImage: `url(${auth.user?.img})`
                                    ,
                                    width: '60px',
                                    height: '60px',
                                    boxShadow: 'none'
                                }}>
                            
                                </div>
                                <div className="name-user-nav"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginLeft: '10px'
                                }}>
                                <strong style={{
                                        color: '#000',
                                        margin: '',
                                        display: 'block'
                                    }}>
                                        { auth.user.name}
                                    </strong>
                                    <span style={{
                                        color: '#000',
                                        fontSize: '13px'
                                        }}>
                                        { auth.user.job}
                                    </span>
                                </div>
                            
                            </div>
                        </>
                    )}
                    <ul className='list-nav-bar'>
                        {   auth.user ? 
                        <>

                            <li onClick={()=> navigate('/')}>
                                <BsFillHouseFill className='icons-nav-bar'/>
                                <span > Home </span>
                            </li>

                            <li onClick={()=> navigate('/perfil')}>
                                <BsFillPersonLinesFill className='icons-nav-bar'/>
                            <a href="#">
                                <span > Meu Perfil </span>
                            </a>
                            </li>
                            
                            <li onClick={handleConfigs}>
                                <BsFillGearFill className='icons-nav-bar'/>
                                <span>Configurações</span>
                            </li>
                                                
                            {auth.user.premium == false && 
                            
                            <li onClick={alterPlan}>
                                <BsAwardFill className='icons-nav-bar' />

                                <a href="#">Trocar Plano </a>
                            </li>}
                        
                           
                           
                           
                           <li onClick={()=> handleWahtsApp(option)}>
                                <BsWhatsapp className='icons-nav-bar' />
                                <span>{valueWwp}</span>
            
                            </li> 
                            
                            
                            
                            
                            <li onClick={handleLogout} className='logout-li'>
                                <BsArrowReturnLeft className='icons-nav-bar' />
                                <span>Logout</span>
                            </li>
                            
                        </>
                                
                                
                                    :
                                    <>
                            <li onClick={()=>{navigate('/login')}}>
                                <BsFillPersonFill className='icons-nav-bar'/>
                                <span>Fazer Login</span>
                            </li>

                            <li onClick={()=>{navigate('/signup')}}>
                            <BsFillPersonLinesFill className='icons-nav-bar'/>

                                <span>Criar conta</span>
                            </li>
                                    </>
                        }
                   


                    </ul>
                    
                 

                </div>
                
            </nav>
           
        </>

    )
}