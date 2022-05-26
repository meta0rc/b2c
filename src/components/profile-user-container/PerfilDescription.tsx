export const PerfilDescription = (props: any) => {

    return(
        <>

            <div className="containerProfile">
                <p>
                    { props.bio}

                    <br />
                    <br />

                   
                  
                    <strong>
                        Região de Atendimento:
                    </strong>
                        { ' ' + props.geo}
                    
                </p>
               
            </div>

        </>
    )

}