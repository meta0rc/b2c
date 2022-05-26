import { useContext, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { Context } from '../../../context/Contex'
import { useApi } from '../../../hooks/useApi'
import '../perfiluser.css'



export const ProfileAddCertifications = () => {
    

    const auth = useContext(Context)
    const api = useApi()

    const inputCertificate  = {

        border: '1px solid #ccc',
        padding: '5px',
        margin: '3px',
        borderRadius: '4px',
        color: 'rgb(126 126 126)'


    }
    const [values, setValues] = useState<any>()
    const token:any = localStorage.getItem('token')

    const addCertificate = async () => {

        const res = await api.addCertification(values, token)
        if(res){
            alert('Certificação Adicionada')
        }
        document.getElementById('addCertificate')?.toggleAttribute('hidden')
        document.getElementById('paragraphAddCert')?.toggleAttribute('hidden')
        document.getElementById('faAddCer')?.classList.toggle('rotate')

    }

    const onChange = (ev:any) => {

        const {name, value} = ev.target

        setValues({...values, [name]: value})


    }
    return(
        <div className="container">
                        <FaPlus
                        id='faAddCer'
                        className="pen-bio-edit-button" style={{fontSize: '16px', top: '5px'}}
                        onClick={()=>{
                            document.getElementById('addCertificate')?.toggleAttribute('hidden')
                            document.getElementById('paragraphAddCert')?.toggleAttribute('hidden')
                            document.getElementById('faAddCer')?.classList.toggle('rotate')
                        }}
                        />
                        <p id='paragraphAddCert' onClick={
                            ()=>{
                            document.getElementById('addCertificate')?.toggleAttribute('hidden')
                            document.getElementById('paragraphAddCert')?.toggleAttribute('hidden')
                            }}>


                            Adicionar Certificação
                        </p>
                                <div hidden  id='addCertificate'>
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
                                onClick={addCertificate}/>
                                </div>
                    
                    </div>
    )
}