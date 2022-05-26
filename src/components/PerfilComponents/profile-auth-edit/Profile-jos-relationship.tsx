import { useContext, useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Context } from "../../../context/Contex"
import { useApi } from "../../../hooks/useApi"
import { Button } from "../../button/button"

export const ProfileJobRelationShip = () => {

    const auth = useContext(Context)
    const id = auth.user?._id
    const api = useApi()
    const [values, setValues ] = useState<any>()
    const [vals, setVals] = useState(0)
    const [val, setVal ] = useState({})

    const inputr : any = document.getElementById('inputr')
    const renderp = document.getElementById('renderp')
    const p = document.createElement('p')
    const count = document.querySelectorAll('.relations-jobs li').length

    p.classList.add('list-add')

   
    const handleSubmitRelationsJob = async () => {

        const result = id ? await api.maintenceRelations(val, id) : null

        if(result != null){
            alert('Adicionado!')
         }

    
        
    }
    
    const onSubmit = (ev:any) => { 
        ev.preventDefault()

        if(renderp){
            if(renderp.childNodes.length < 5 && count + vals < 5) { 

                setVals(vals + 1)
        
                p.innerText = values

                setVal({...val, [vals.toString()]: values})

                renderp?.append(p)
        
                inputr.value = ''

            
            }
            else {
                 alert("Você já adicionou 5 Serviços Relacionados")
            }
        }


        
    }
    useEffect(()=>{

        

    }, [values])
    return (
        <>
     

            <div className="container">
                <FaPlus className="pen-bio-edit-button" style={{fontSize: '16px'}} onClick={()=>{
                    document.getElementById('jobs-relations')?.toggleAttribute('data-active')
                }}/>

                    <p style={{margin: '10px 0'}} >
                    Adicione categorias relacionadas ao seu nicho de atuação
                    </p>

                <div id="jobs-relations" 
                className="add-active-jobs-relations" data-active>

         
                    <form onSubmit={onSubmit}>
                        <input 
                        title="Você pode adicionar até 5 categorias, precionando enter a cada uma que adicionar"
                        id="inputr"
                        type="text" 
                        name="relation_1"
                        placeholder="ex: Botanica"
                        onChange={(e) => {
                           
                            setValues(e.target.value)
                        }}
                        />
                    </form>

                    <div className="flex" id="renderp">
                       
                    </div>

                   


                    <Button value={'Enviar'} color='#fff' backgroud={'#8bc34a'} onClick={handleSubmitRelationsJob} 
                    />
                               
                </div>

                
                   
            </div>

        </>
    )
}