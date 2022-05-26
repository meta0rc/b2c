import { FaCrown, FaWhatsapp } from 'react-icons/fa'
import { icons } from '../../types/icons'


export const IconsProfile = (props: icons) => {

    return (
        <>
            <div className="icons-profile-id" key={'icons-' + props.index}>
                    {props.wwp &&

                    <span title="Fazer um orçamento pelo WhatsApp">
                    <FaWhatsapp color="green" className="icon-profile-id" onClick={()=>{
                        window.open(props.wwp + `&text=Gostaria de Solicitar um orçamento de ${props.job}`, 'target: _blank')
                    }}/> 
                    </span>
                    }
                    
                    {props.premium == true &&  
                    
                    <span title={`${props.name} é Cliente premium`}>

                
                    <FaCrown color="gold" className="icon-profile-id"
                    />
                    </span>
                    }
                
            </div>
        </>
    )
}