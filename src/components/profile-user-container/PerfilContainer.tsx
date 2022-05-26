
import { IconsProfile } from '../iconsProfile/iconsProfile'



export const PerfilContainer = (props: any ) => {

    return(

        <>

            <div className="containerProfile container-profile-user-id" id="profile-user-by" key={'containerProfile-' + props.index}>

            <IconsProfile name={props.name} wwp={props.wwp} index={props.index} premium={props.premium} job={props.job}/>

            <div className="profile-perfil-user-image" key={'profile-image-' + props.index}
            style={{
                backgroundImage: `url(${props.img})`
                
            }}>
            </div>


            <div className="columns-profile-user" key={'name-collumn-' + props.index}>
                <h2 key={'h2-' + props.index}>
                {    props.name}
            
                </h2>

                <span key={'job-' + props.index}>
                    Prossional especialista em 
                    {' ' + props.job}
                </span>
            </div>

            </div>
        </>
    )

}