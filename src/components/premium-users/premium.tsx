import { useContext, useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import './premium.user.css'
import {FaCrow, FaCrown, FaStar} from 'react-icons/fa'
import { useNavigate} from "react-router-dom"
import { Context } from "../../context/Contex"

export const Premium = () => {

    type Premium = {
        job : string,
        _id: string,
        name: string,
        img: any,
        avaliables: number,
        bio: string,
        premium: Boolean,
        wwp: string
    }

    
    const navigate = useNavigate()
    const [data, setDatapi] = useState<Premium[]>([]) 
    const [idCliqued, setId] = useState('')
    const api = useApi()
    const context = useContext(Context)

    const arr = new Array();
    let novo = 0
    let aux = 0

    useEffect(() => {
       novo = arr.length > 0 ? arr.reduce((s, i) => {
            return s + i 
        }) : new Array();

        aux = Math.ceil(novo / arr.length)
       
    }, [arr])

    useEffect(() => {

        const windowLoaded = async () => {
        
            const res = await api.renderPremium()
             
            setDatapi(res.data.premiums)
            
        
     }
     windowLoaded()
    }, [])

    
   const handleClickUserGet = async (id: String) => {
        context.setIDTOGet(id)
        
        if(context.getID){
            const res = await api.getPerfil(context.getID)
            if(!res){
                return res
            }
            navigate(`/user/${context.getID}`)
        }
        
   }

    return (

        <>

            <div className="premiumsusersdiv">
                <h2>
                    Usuários que são Parceiros em destaque
                </h2>
                { data.map((user, i) => {

                    return(
                        <div className="premium-user" key={user._id} onClick={()=> handleClickUserGet(user._id) }>

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
                               
                                    <strong 
                                    key={user._id + user.name}
                                    style={{display: 'flex',
                                            alignItems: 'center'    
                                }}
                                    >
                                         { user.name } 
                                        <FaCrown key={"premim_" + user.name}color='orange' size={20}  style={{margin: '0 5px'}}/>
                                    </strong> 

                                

                                    <div key={'Avaliables' + i.toString()} className="flex-avaliables" title={`${Object.values(user.avaliables).length.toString()} Avaliações Positivas`}>

                                        {Object.values(user.avaliables).length > 0 ? [...Array(5)].map((s, j) => <FaStar key={'star' + user.name + j.toString()  }color="gold"/>) : '' }
                                      
                                    </div>


                                    <span key={'job' + user.job} className="profissao-user-premium">
                                    {user.job}
                                    </span>
                               
                           

                             
                            </div>

                            <div className="other">
                                <p key={user._id + '-' + user.name + ' - Description'}>
                                    {user.bio}
                                </p>
                            
                            </div>

                        </div>
                  


                        </div>
                    )

                })}
            </div>


        </>

    )

}