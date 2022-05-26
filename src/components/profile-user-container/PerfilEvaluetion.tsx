import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { useApi } from "../../hooks/useApi"
import { Button } from "../button/button"

type userEvaluetion = {
    name: String | any
    id: String | any
}
export const PerfilEvaluetion = (props: userEvaluetion) => {


    const id = props.id
    const [values, setValues ] = useState<any>()
    const api = useApi()
    const [rate, setRate ] = useState<any>(0)
    const [hover, setHover] = useState<any>(0)


    const onChange = (ev:any) => {

       const { name, value } = ev.target
        
       setValues({...values, [name]: value})
       
        
    }

    

    const handleSubmitEvaluetion = async () => {

        if(!rate){
            return alert('Escolha uma estrela')
         }
         
        if(!values.name){
            return alert('Digite seu nome')
        }

        const res = await api.addEvaluetion(values, id)
       
        if(res){
            alert('A sua avaliação foi enviada!')
            console.log(res)
        }
    }

    
    
    return(
        <>

            <div className="containerProfile" id="evaluetion-page">

                <h1>
                    Avalie o trabalho feito por {props.name}
                </h1>

                <input type="text" name="name" placeholder="Nome" onChange={onChange}/>

                <textarea placeholder="Comentário" name="comment" cols={30} rows={5}  onChange={onChange}>

                </textarea>

                <p>
                    Para você, o trabalho de {props.name } foi?
                </p>

                <div className="rates" style={{margin: '15px 0'}}>
                {[...Array(5)].map((s,i) => {

                    const ratingValue = i + 1

                    return(
                        <label key={'label-'+i}>
                            <input 
                            key={'radio-'+i}
                            hidden
                            type="radio" 
                            name="rate" 
                            value={ratingValue} 
                            onClick={()=> 
                                {
                                    setRate(ratingValue) 
                                    setValues({...values, 'rate': ratingValue})
                                }
                           
                            
                            }
                            />
                            
                             <FaStar 
                             size={20}
                             key={'star'+i}
                             color={ratingValue <= (hover || rate) ? 'gold' : 'grey'} 
                             onMouseEnter={()=> setHover(ratingValue)}
                             onMouseLeave={()=> setHover(null)}
                             />
                            
                        </label>
                       
                    )
                })}

            </div>
                
            <Button value="Enviar" color="#fff" backgroud="rgb(64 82 187)" onClick={handleSubmitEvaluetion}/>
              
                
                
            </div>

        </>
    )
}