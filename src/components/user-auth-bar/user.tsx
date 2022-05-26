import { useContext, useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import imgUser from '../../assets/images/example.jpg'
import { Context } from '../../context/Contex';
import './user.css'


export const User = () => {
    const navigate = useNavigate()
    const auth = useContext(Context)
    const userLog = auth.user?.name
    const userPerfil = auth.user?.img ? auth.user?.img : imgUser

    const handleLogout = async () => {
        await auth.logout()
        navigate('/')
    }
   
    return(


            <div className="user">
                <div className="profile">
                    <label htmlFor="avatar" id="perfilphoto">
                        <div className='user imgUser'
                            style={{
                                backgroundImage: `url(${userPerfil})`,
                                backgroundSize : 'cover'
                            }}
                            onClick={() =>
                                navigate('/perfil')
                            }
                        >

                    
                        </div>
                        
                    </label>
                    <span>Olá { userLog }! O que gostaria de fazer? 
                    </span>
                </div>
               


            </div>

           

    )
}