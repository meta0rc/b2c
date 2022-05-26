import { useContext, useState } from "react"
import { FaLock, FaEnvelope, FaUserAlt, FaPaperPlane } from "react-icons/fa"
import { Context } from "../../../context/Contex"
import { useApi } from "../../../hooks/useApi"



export const PersonalData = () => {

    const auth = useContext(Context)
    const token : any = localStorage.getItem('token')    
    const email : any = auth.user?.email
    const name : any = auth.user?.name
    const [values, setValues] = useState<any>()
    const api = useApi()

    const handleUpdatePersonalData = async () => {

        const res = await api.updatePersonalData(token, values)

        

        if(res){
            alert('Dados Alterados')
        }
    }

    const onChange = (ev:any) => {
        const {name, value} = ev.target
        
        setValues({...values, [name]: value})
    }

    return (
        <>
            
            <div className="personal-datas">
                <h2>Dados Pessoais</h2>
               
                <div className="namePersonal">
                    <label htmlFor="name">
                        <FaUserAlt className="personalIcon"/>
                    </label>
                    <input type="text" name="name" id="namePersonalData" placeholder={name} onChange={onChange}/>
                </div>
               
                <div className="mailPersonal">
                    <label htmlFor="mail">
                        <FaEnvelope className="personalIcon"/>
                    </label>
                    <input type="text" name="mail" id="mailPersonalData" placeholder={email} onChange={onChange}/>
                </div>

                <div className="Lock">

                    <label htmlFor="lock">
                        <FaLock className="personalIcon"/>
                    </label>
                    
                    <input type="password" name="password" id="passwordPersonalData" placeholder='asçdkçasdçasldk' onChange={onChange}/>
                </div>
                <div className="">
                    
                    <button className="submitPersonalAlterations" onClick={handleUpdatePersonalData}>
                        Enviar
                    </button>
                </div>
            </div>
            
         
        </>
    )
}