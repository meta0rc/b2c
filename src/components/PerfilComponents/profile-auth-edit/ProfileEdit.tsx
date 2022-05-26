import { useContext, useEffect } from "react"
import { Context } from "../../../context/Contex"
import { FaPen, FaSave } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import './profileEdit.css'
import { useState } from "react"
import { PersonalData } from './ProfilePersonalData'
import { RiSendPlane2Fill } from "react-icons/ri"
import { BsArrowReturnLeft } from "react-icons/bs"


export const ProfileEdit = () => {


const auth = useContext(Context)

const capa = auth.user?.capa

const token = localStorage.getItem('token')

const [file, setImage] = useState<any>()

const [capaEdit, setCapa] = useState<any>()



const closedPerfilEdit = () => {
    const back: any = document.getElementById('back')

    const nav: any = document.getElementById('mobileNav')
    const profileContainer = document.getElementById('profile-edit-content')

    profileContainer?.classList.toggle('disabled-edit')

    back.style.display = 'block'
    nav.style.display = 'block'
}


const handleSubmit = async (e:any) => {

    e.preventDefault()

 
        const formData = new FormData();

        formData.set('token', token!)
        
        if(file){
            formData.set('option', 'perfil')
            formData.append('file', file);
        }

        const headers = {
            'headers': {
              'Content-Type': 'application/json'
            }
          }
      
        await auth.PerfilImage(formData)

        console.log(formData)

        document.querySelector('#perfilphoto img')?.setAttribute('src', URL.createObjectURL(file))
        

}

    return (

        <div className="editProfile disabled-edit profileActiveEdit" id="profile-edit-content" >
        
            <div className="perfil-preview" id="perfilPreview"
                style={{
                    backgroundImage: `url(${capa ? capa : './src/assets/images/statics/background-login.png'})`
                }}
            >
                
               
               <div className="buttonsmenu">
           

                    <FaSave onClick={()=> {document.getElementById('submitProfileEdit')?.click()}}
                            className="submit-photo btns btnsubmit"
                            id="buttonEnvi" title="Enviar Imagem"/>


                    <GrClose id="close-perfil-preview" 
                    className='btns btnClose'
                    onClick={closedPerfilEdit}/>
               </div>
                    
                <div className="image-perfil-view"
                    style={{
                        marginTop: '90px'
                    }}
                >
                    <label htmlFor="file-edit-input"> 
                        <div id="fa-englobe-pen" title="Selecionar imagem de perfil">
                            <FaPen id="fa-pen"/>
                        </div>
                    </label>
                    
                    {file ? <div style={{
                        backgroundImage: `url(${URL.createObjectURL(file)})`,
                        backgroundSize : 'cover'
                    }} id="user-profile-edit"></div>

                    : 

                    <div style={{
                        backgroundImage : `url(${auth.user?.img})`,
                        backgroundSize : 'cover'
                    
                        }} 
                        id="user-profile-edit">
                    </div>}
                 
                    <div className="image_info">
                        <p>Faça upload de uma nova imagem</p>
                        <p> Max 4MB</p>         
          
                    </div>
                   
                </div>
                
               
            </div>
            <PersonalData />
                <form hidden method="post" encType="multipart/form-data" id="formData" onSubmit={handleSubmit}>
                    
                    <input type="file" name="file" id="file-edit-input"  onChange={(e)=> setImage(e.target.files![0])
                    } />

                    <input type="submit" value="Enviar" id="submitProfileEdit" />
                </form>
           
        </div>
    )


}