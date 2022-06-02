import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Evaluetions } from "../components/evaluetions/Evalutions"
import { Header } from "../components/header/header"
import { IconsProfile } from "../components/iconsProfile/iconsProfile"

import { JobSearch } from "../components/search-bar/search"
import { Context } from "../context/Contex"
import { useApi } from "../hooks/useApi"
import { userRender } from "../types/UserRender"


export const FindJob = () => {

    const vals:Array<Number> = []
    const api = useApi()
    const navigate = useNavigate()
    const [users, setUsers] = useState<userRender[]>()
    const [message, setMessage] = useState(true)

    const handleClickUserGet = async (id: string) => {

        const context = useContext(Context)
        context.setIDTOGet(id)

        if(context.getID){
            const res = await api.getPerfil(context.getID)
            if(!res){
                return res
            }
            navigate(`/user/${context.getID}`)
        }
    }

    useEffect(()=> {
        const param = JobSearch.job ? JobSearch.job : document.URL.slice(30)

        const findJob = async () => {
            if(param){
                const res = await api.FindJob(param)
                if(res){
                    res.data.users ? setUsers(res.data.users) : setUsers(res.data.filtered)
                }
                else {
                    setMessage(false);
                }

            }
        }

        findJob()

    }, [document])



    return(
        <>
            <Header />
            {users ? <h1 className="center-headers">Profissionais encontrados</h1> : 
            <div>
                <h1 className="center-headers">Ops!</h1>
                <h2  className="center-headers"> Nenhum profissional Encontrado </h2>
            </div>
}  
            
            {users?.map((user, i) => {

                return (
                    <div className="premiumsusersdiv" key={i.toString() + 'user'} > 
                        <div className="premium-user" key={'' + user._id} onClick={()=> handleClickUserGet(user._id) }
                        
                        style={{position: 'relative'}}
                        >

                        <div style={{width: '100px', height: '100px', margin: '10px 25px 10px 0'}}>
                            <div  style={{
                                backgroundImage : `url(${user.img})`,
                                width: '100px',
                                height: '100px'
                                
                            }}
                            className="img-premium-user" 
                            key={user._id + '-' + user.img}>
                            </div>
                        </div>
                       
                      

                        <div className="description" 
                            key={user._id  + 'user-descricao-premium'}
                        >
                            <div className="name-user-premium" 
                            
                            key={'user' + user.name}>
                               
                                    <strong key={'' + user._id + user.name}>
                                { user.name }
                                    </strong> 
                                    
                                    <span style={{fontSize: '12px', margin: '5px 0'}} className="profissao-user-premium">
                                    {user.job}
                                    </span>

                                    <div className="avaliables">
                                        {user.avaliables.length > 0 && <Evaluetions avaliables={user.avaliables}/>}
                                    
                                    </div>
                                   
                                    <IconsProfile wwp={user.wwp} premium={user.premium} index={user.premium} name={user.name} job={user.job}/>
    
                             
                            </div>
                            <p key={user._id + '-' + user.name + ' - Description'}>
                                {user.bio}
                            </p>
                           
                        </div>
                  
                            
                      
                        </div>
                        
                                
           
               
            </div>
 

                )

            })}
            

        </>
    )
}