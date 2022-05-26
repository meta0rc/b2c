

import { UserCertifications } from "../components/PerfilComponents/UserCertifications"
import { PerfilAvaliebles } from "../components/PerfilComponents/UserAvaliables"
import { UserHeader } from "../components/PerfilComponents/UserHeader"
import { ProfileEdit } from "../components/PerfilComponents/profile-auth-edit/ProfileEdit"
import { ContactsUserPerfil } from "../components/PerfilComponents/UserContatcs"
import { UserBio } from "../components/PerfilComponents/UserBio"
import { BsGearFill } from "react-icons/bs";
import { UserInsights } from "../components/PerfilComponents/UserInsights"
import { useContext } from "react"
import { Context } from "../context/Contex"
import { ProfileJobRelationShip } from "../components/PerfilComponents/profile-auth-edit/Profile-jos-relationship"
import { ProfileRelationsJob } from "../components/PerfilComponents/Profile-relations-job"



export const UserPerfil = () => {

    
    const auth = useContext(Context)
    return(
      <>
            <div className="container-hover-all">

            <ProfileEdit />
                <UserHeader />
           
                    <div className="f-u" style={{position: 'relative'}}>

                        <BsGearFill title="Alterar dados pessoais" style={{
                            position: 'absolute',
                            top: '25px', right: '5vw',
                            color: '#ccc', cursor: 'pointer',
                            zIndex: '3'
                            
                        }} 
                        onClick={()=> {
                            document.getElementById('.profile-edit-content')?.classList.remove('disabled-edit')
                        }}
                        />
                    <UserBio />

                    <ContactsUserPerfil />

                 
                   
                    {
                    auth.user?.JobRelationsShip && auth.user?.JobRelationsShip.length != 0 && <ProfileRelationsJob jobs={auth.user?.JobRelationsShip != null && auth.user?.JobRelationsShip }/>
                    }
              
                    <ProfileJobRelationShip />
                 
              
                  
                   

                   
                    <UserInsights />
                    
                    {auth.user != undefined && auth.user.avaliables && auth.user?.avaliables.map((a : any, i) => {
                        return <PerfilAvaliebles rate={a.rate} comment={a.comment} nameAvaliator={a.name} key={'evaluetion-from-' + i.toString()}/>
                    })}
                    
                    <UserCertifications />
               
         
                </div>

               
                
              
               
            </div>

           
        </>
     
    )

}