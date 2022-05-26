
import { useContext, useState } from "react"
import { Context } from "../../context/Contex"
import {FaPen} from 'react-icons/fa'

import './perfiluser.css'

import { useApi } from "../../hooks/useApi"
import { RiSendPlane2Fill } from "react-icons/ri"

export const UserBio = () => {
    
    
    const api = useApi()
    const [bioValue, setbioValue] = useState('')

    const auth = useContext(Context)

    const textarea = document.querySelector('.edit-active-bio')

    const bioP = document.getElementById('bio')

    const bio:any = auth.user?.bio ? auth.user.bio : 'Aqui você pode escrever sobre você, suas expêriencias, certificações, etc'



    const onChange = (ev:any) => {

        const btnSend = document.getElementById('send-bio-edited')
        const {value} = ev.target
        
        if(value.length >= 50){
            btnSend?.classList.remove('desactive')
            setbioValue(value)
        }
        else{
            btnSend?.classList.add('desactive')
        }


    }


    const handleSentBioEdited = async () => {

        
        const token:any = localStorage.getItem('token')

        const res = await api.editBio(bioValue, token)
        if(res){
            textarea?.toggleAttribute('hidden')
            bioP?.toggleAttribute('hidden')
            alert('Bio atualizada')
        }

    }

    const handleActiveEditeionBio = () => {

        textarea?.classList.toggle('activeEdition')
        bioP?.toggleAttribute('hidden')

    }
    return(
        <>
            <div className="container">
                <FaPen className="pen-bio-edit-button" onClick={handleActiveEditeionBio}/>
                    <p id="bio" onClick={handleActiveEditeionBio}>
                      
                        { bio }
                        
                    </p>
                    <div className="edit-active-bio activeEdition">
                        <textarea onChange={onChange} 
                        minLength={50}
                        maxLength={500} className="edit-bio" cols={33} rows={5}>
                        </textarea>
                        

                              <RiSendPlane2Fill
                                className='fa-send desactive' 
                                id="send-bio-edited"
                                onClick={handleSentBioEdited}
                                
                                />
                        
                    </div>
                </div>
        </>
    )

}