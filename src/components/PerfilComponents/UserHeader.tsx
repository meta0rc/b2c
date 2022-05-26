
import { useContext } from "react"
import { Context } from "../../context/Contex"

import {FaArrowLeft, FaMapMarkerAlt, FaChevronLeft} from 'react-icons/fa'
import './perfiluser.css'
import { Nav } from "../nav/nav"
import { useNavigate } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs"


export const UserHeader = () => {

    const auth = useContext(Context)
    const back:any = document.getElementById('back')
    const nav : any = document.getElementById('mobileNav')
    const navigate = useNavigate()

    const handlePerfil = () => {


        const containerEdit = document.getElementById('profile-edit-content')

        containerEdit?.classList.toggle('disabled-edit')



        back.style.display = 'none'
        nav.style.display = 'none'

    }

    return (
        <>
            
            <div className="header-user"
            style={{
                backgroundImage: `url(${auth.user?.capa ? auth.user.capa : './src/assets/images/statics/background-login.png'} )`
            }}>
            
            
           
            
                <Nav className="right-float" />
                <BsChevronLeft className="back" id='back' onClick={()=> navigate('/')} />
                
                    <div className="user-top">
                   
                        <div onClick={handlePerfil}className="prefil-image-edited-cont" 
                        style={
                            {
                                backgroundImage: `url(${auth.user?.img})`
                                }}>
                            
                        </div>
                        
                        <span className="user-name-perfil">{auth.user?.name}</span>
                        
                        <strong className="user-job-perfil">
                            { auth.user?.job}
                        </strong>

                        <div className="location" style={{
                            display: 'flex',
                            position: 'relative',
                            marginBottom: '10px'
                        }}>
                           
                            <p style={{
                                fontSize: '12px'
                            }}>
                                
                        
                          {auth.user?.geo}
                        </p>
                        <FaMapMarkerAlt style={{position: 'absolute',
                            right: '-25px',
                            marginTop: '-5px',
                            color: 'tomato'
                        }} />
                        </div>


                    </div>
                   

                </div>
              
            
            
            
            
        </>
    )

}