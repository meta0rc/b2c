import { FaRegEye } from 'react-icons/fa'

export const PerfilCertifications = (props:any) => {

    return(
        <>
        <div className="containerProfile">

                        <h2 key={'h2Certification'}>
                            Certificações 
                        </h2>
                        <div className="certification">
                        <strong style={{display: 'block', margin: '15px 0'}}>

                            { props.certificationName }

                        </strong>
                        <div className="btnView">

                            <a style={{color : '#fff'}}
                                href={props.url} 
                                target="_blank"
                                className='certificate-view-button'
                                > Ver Certificado

                                <FaRegEye style={{position: 'relative', top: '3px', left: '4px'}}/>
                            </a>
                        </div>
                    </div>
                </div>


        </>
    )
}