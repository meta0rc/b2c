import './search.css'
import { FaSearch } from "react-icons/fa"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const JobSearch = {

    job: '',

    Search: () => {

        const [job, setJob] = useState<any>()

        const navigate = useNavigate()
        
        return (
            <>  
    
                <section className="foundJob containerSearch">
                    <div className="title-and-slogan">
                        <h1>
                            Para profissionais e clientes se conectarem
                        </h1>
              
                    </div>
                    
                    <div className="findjob">
                        <input type="search" id="search-work" placeholder="Encontre um profissional" onChange={(e)=> setJob(e.target.value)}/>
    
                        <button  id="fa-search" onClick={()=>{
                            JobSearch.job = job

                            navigate(`/findJob/${job}`)
                            
                        }}>
                            <FaSearch className='searchbutton'/>
                        </button>
                    </div>
    
                </section>
    
    
            </>
        )

    }
}
