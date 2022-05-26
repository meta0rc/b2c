import { Bars } from './bars'
import './perfiluser.css'

export const UserInsights = () =>{


    return (
        <>
               <h2 className='users-two-headers-title'>
                    Seus Insights
                </h2>
            <div className="container">
                
                <p style={{margin: '10px 0', fontSize: '13px'}}>
                Aqui você pode mensurar quantos projetos foram concluídos por você através da BIA
                </p>

                <div>
                  
                    <Bars />

                </div>
                

            </div>


        </>
    )
}