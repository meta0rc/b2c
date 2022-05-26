import { useContext } from "react";
import { render } from "react-dom";
import { FaPen, FaPlus } from "react-icons/fa"
import { GrClose } from "react-icons/gr";
import { Context } from "../../context/Contex";
import { useApi } from "../../hooks/useApi";
import { ProfileJobRelationShip } from "./profile-auth-edit/Profile-jos-relationship";

export const ProfileRelationsJob = (props: any ) => {

    const api = useApi();
    const auth = useContext(Context);
    const id = auth.user?._id
    
    const editRelations = (arg:any) => {
       
        const li = document.getElementById(`relation-${arg}`)
        if(li){
            li.style.background = '#fff';
            li.setAttribute('contenteditable', 'true');
        }
        
    }



    return (
        <>  
       
         <div className="container">
           { props.jobs != '' &&
            <ul className='flex relations-jobs'>
           
           <FaPlus className="pen-bio-edit-button" />
         
          
               
               {Object.values(props.jobs[0]).map((r:any, i)=> {
                   return(
                       <li onClick={() => editRelations(i)} id={'relation-' + i} key={'relation_' + i}>{r} <FaPen size={10} />  </li>
                   )
               }) }
           </ul>
           }
            
          
            </div>
        </>
    )


}