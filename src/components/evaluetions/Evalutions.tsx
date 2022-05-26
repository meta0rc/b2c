import { FaStar } from "react-icons/fa"

type rate = {

    avaliables: [{
        rate: any
    }]

}

export const Evaluetions = (props: rate) => {

    const notaMenorque: Array<any> = []
    const notaMaiorque: Array<any> = []
    const vals: Array<any> = []

    

    return(
        <>

            {props.avaliables.map(_eval => {

                vals.push(_eval.rate)

            })}
           
            {vals.map((n)=> {

              if(n < 4){
                notaMenorque.push(n)
              }
              else if(n > 4){
                notaMaiorque.push(n)
              }
            })}

            {
                notaMaiorque.length > notaMenorque.length ? <Estrelas options={5} /> : <Estrelas options={4} />
            }
            
        </>
    )
}

export const Estrelas = (props: any) => {

    return (
        <>
            {[...Array(5)].map((s, i) => {

                const ratingVal = i

                return <FaStar key={'stars' + i.toString()} color={ratingVal < props.options ? 'gold' : 'grey'} />
            })}
        </>
        

    )

}