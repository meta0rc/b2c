import { useContext, useState } from 'react'
import { FaEye, FaPen, FaPlus, FaRegEye, FaTimes } from 'react-icons/fa'
import { RiEyeCloseLine, RiSendPlane2Fill } from 'react-icons/ri'
import { Context } from '../../context/Contex'
import { useApi } from '../../hooks/useApi'
import { ProfileAddCertifications } from './profile-auth-edit/ProfileAddCertifications'
import './perfiluser.css'

export const UserCertifications = () => {

    const inputCertificate  = {

        border: '1px solid #ccc',
        padding: '5px',
        margin: '3px',
        borderRadius: '4px',
        color: 'rgb(126 126 126)'
    }

 
    const token : any = localStorage.getItem('token')

    const auth = useContext(Context)

    const api = useApi()

    const [newValues, setNewValues] = useState<any>()

    const handleEditCertificate = async (id:number) => {
        
        const res = await api.updateCertification(id,newValues, token)

        if(res){
            alert('Certificacao Atualizada')
        }

    }

    const handleRemoveCertificate = async (id: Number) => {
        const res = await api.removeCertification(id, token)
        if(res){
            alert('Removido')
        }
    }

    const onChange = (ev:any) => {

        const { name, value } = ev.target

        setNewValues({...newValues, [name]: value})

    }


    return (

        <>
            <h2 className='users-two-headers-title'>
                Certificações
            </h2>

            {auth.user?.certifications.map((cert:any, i:any) => {

                return(
                    <div className='container' key={'container-' + i }>
                        
                        <FaPen className="pen-bio-edit-button" onClick={()=>{
                            document.querySelectorAll('.updateCertification')[i].toggleAttribute('hidden')

                            document.querySelectorAll('.certification')[i].toggleAttribute('hidden')

                        }}/>

                        <FaTimes style={{right: '25px'}} 
                        className="pen-bio-edit-button" onClick={()=>{handleRemoveCertificate(i)}}/>
                        <div className="certification">
                            <strong key={cert.name} style={{display: 'block', margin: '15px 0'}}>
                                { cert.name }
                            </strong>
                            <div className='btnView'>

                                <a style={{color : '#fff'}}
                                    href={cert.url} 
                                    target="_blank"
                                    key={cert.url}
                                    className='certificate-view-button'
                                    > Ver Certificado

                                    <FaRegEye style={{position: 'relative', top: '3px', left: '4px'}}/>
                                    
                                  
                                    
                                </a>
                            </div>
                        </div>
                        <div hidden className='updateCertification'>

                                    <input type='text'
                                    style={inputCertificate}
                                    placeholder='Nome do curso'
                                    name="name"
                                    minLength={20}
                                    maxLength={100} 
                                    onChange={onChange}className="edit-bio">
                                    </input>

                                    <input type='text'
                                    style={inputCertificate}
                                    placeholder='Link do Certificado'
                                    name="url"
                                    minLength={10}
                                    maxLength={200}
                                    onChange={onChange}
                                    className="edit-bio">
                                    </input>
                                
                                <RiSendPlane2Fill
                                className='fa-send'
                                onClick={()=>handleEditCertificate(i)}/>
                                </div>   
                       
                
                    </div>
                )
            })}

            <ProfileAddCertifications />
            

        </>

    )
}