import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"

export const Rates = (props: any) => {

const [rate, setRate ] = useState<any>(0)
const [hover, setHover] = useState<any>(0)


    return (

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
                <p id="valueRate">
                    { rate }
                </p>
            </div>
           
        )
}

