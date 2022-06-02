import { useContext, useEffect, useState } from "react"
import { Header } from "../components/header/header"
import { useApi } from "../hooks/useApi"
import '../components/profile-user-container/profile-user.css'
import { PerfilTitle } from "../components/profile-user-container/PerfilTitle"
import { PerfilContainer } from "../components/profile-user-container/PerfilContainer"
import { PerfilDescription } from "../components/profile-user-container/PerfilDescription"
import { PerfilCertifications } from "../components/profile-user-container/PerfilCertifications"
import { PerfilEvaluetion } from "../components/profile-user-container/PerfilEvaluetion"
import { PerfilAvaliebles } from "../components/profile-user-container/PerfilAvaliables"
import { userRender } from "../types/UserRender"
import { Context } from "../context/Contex"

export const PerfilUser = () => {
    

    const api = useApi()
    const context = useContext(Context)
    const id = context.getID
    const [data, setData] = useState<userRender>()

    useEffect(()=>{

        const renderUser = async () => {
            if(id){
                const res = await api.getPerfil(id)
                setData(res.data.user)
                console.log(res.data.user)
            }
        }
        renderUser()
    }, [document])


    return(
        <>
            <Header />

            <PerfilTitle job={data?.job} />

            <PerfilContainer job={data?.job} wwp={data?.wwp} 
            premium={data?.premium} name={data?.name} img={data?.img.replace('http://localhost:3000/src', '../..')}/>

            <PerfilDescription bio={data?.bio} geo={data?.geo} />

            
            {data && data.JobRelationsShip.length != 0 && <div className="containerProfile"><h2 style={{marginBottom: "15px"}}> As habilidades do profissional são</h2>
                <ul>
                {Object.values(data.JobRelationsShip[0]).map(value => {
                        return <li key={value} style={{listStyle: 'disc', marginLeft: '25px'}}> { value } </li>
                    })}
                </ul> 
                </div>  }
           
             
            
        

         

           
           
            {data?.certifications.map((certification, i) => {
                
               
                return <PerfilCertifications certificationName={certification.name} url={certification.url} index={i.toString()} certification={certification.name} key={certification.name + i.toString()}/>

                
            }   
            
                    
            )}

            {data?.avaliables.map((rate, i) => {
                
                return <PerfilAvaliebles nameAvaliator={rate.name} comment={rate.comment} rate={rate.rate} index={i.toString()} key={'Avaliables' + i.toString()}/>

            })}

            {document.URL.includes('#evaluetion-page') && 
            <PerfilEvaluetion name={data?.name} id={data?._id}/>}

            <div className="containerProfile"><h2 style={{marginBottom: "15px"}}> Entre em contato já com este profissional e saiba mais sobre ele</h2>
            <strong>Email: </strong><p>{data?.email}</p>
            <br />
            <strong> Telefone: </strong><p>{data?.num}</p>
            </div>
            
            
        </>


    )
}