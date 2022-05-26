import { FaStar } from "react-icons/fa"

export const PerfilAvaliebles = (props:any) =>{

    const rate = parseInt(props.rate)
    
 
    return (
        <>

            <div className="containerProfile" >
                <div className="flex-container-comments-and-avaliables carrosel-comments">

                    <strong className="name-avaliator"> {props.nameAvaliator} 
                    </strong>

                    <strong style={{margin: '10px 0', fontSize: '12px'}} >
                        {props.comment ? `"${props.comment.slice(0, 30) + '...' }"` : null}
                    </strong>

                    <div className="flex-row-avaliables-stars">
                        {[...Array(rate)].map((s, i) => {

                            return <FaStar key={props.nameAvaliator + 'stars' + i.toString()} color="gold" />

                        }) }
                        </div>

                    <div className="comment-avaliable" style={{margin: '10px 0'}}>
                        <p > 
                            {props.comment}
                        </p>
                    </div>  

                       


                </div>
            </div>


        </>
    )
}