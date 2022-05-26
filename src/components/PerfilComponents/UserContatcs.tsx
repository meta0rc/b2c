import { useContext, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { Context } from '../../context/Contex'
import { useApi } from '../../hooks/useApi'
import './perfiluser.css'
export const ContactsUserPerfil = () => {

    const api = useApi()
    const auth = useContext(Context)

    const [values, setValues] = useState<any>()

    const token : any = localStorage.getItem('token')

    const sendEditions = async () => {

        const res = await api.editDataPerfil(values, token)

        console.log(res)
    }

    const onChange = (ev:any) => {

        const {name, value} = ev.target

        setValues({...values, [name]: value})


    }
    return(
        <>
            <div className="contacts-u"
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center'
            }}>

            
            <span className='container span-contact-mail span-perfil-edit'>
            <FaPen className="pen-bio-edit-button" id='geo' onClick={()=>{
                    document.querySelector('.edit-geo')?.toggleAttribute('hidden')

                    document.querySelector('.p-geo')?.toggleAttribute('hidden')


                }}/>
                <p className='p-geo'>
                { auth.user?.geo ? auth.user?.geo : 'Adicione a região em que você presta serviço'}
                </p>
                <div className="edit-geo" hidden>
                <input type='text' onChange={onChange}
                        placeholder=""
                        name="geo"
                        minLength={9}
                        maxLength={20} className="edit-bio">
                        </input>
                        <RiSendPlane2Fill className='fa-send' onClick={sendEditions} />
                    </div>

                <input type="text" name="geo" id="geo" className='inputHiddenAtt' hidden />
            </span>
         
            <span className='container span-contact-tell span-perfil-edit'>
            <FaPen className="pen-bio-edit-button" onClick={()=>{
                    document.querySelector('.edit-num')?.toggleAttribute('hidden')

                    document.querySelector('.p-num')?.toggleAttribute('hidden')


                }} />
            <p className='p-num'>
            { auth.user?.num ? auth.user?.num : 'Adicione um telefone para contato'}
            </p>
           
            <div className="edit-num" hidden>
                        <input type='text' onChange={onChange}
                        name="num"
                        minLength={9}
                        maxLength={20} className="edit-bio">
                        </input>
                        

                        <RiSendPlane2Fill className='fa-send' onClick={sendEditions} />
                    </div>
            
            </span>
         
            <span className='container span-contact-mail span-perfil-edit'>
            <FaPen className="pen-bio-edit-button" onClick={()=>{
                    document.querySelector('.edit-mail')?.toggleAttribute('hidden')

                    document.querySelector('.p-mail')?.toggleAttribute('hidden')


                }}/>
            <p className='p-mail'>
            { auth.user?.job ? auth.user?.job : 'Sua Profissão'}
            </p>
            
            <div className="edit-mail" hidden>
                <input 
                    type='text' 
                    onChange={onChange}
                    name="job"
                    minLength={9}
                    maxLength={20} 
                    className="edit-bio">
                </input>
                <RiSendPlane2Fill className='fa-send' onClick={sendEditions}/>
            </div>
            </span>
            </div>


        </>
    )

}