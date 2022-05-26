import Loguinho from '../../assets/images/statics/ric.png'
import { useNavigate } from 'react-router-dom';


export const Logo = () => {

    const navigate = useNavigate()

    return(
        <>
        <div className="logo" onClick={()=> navigate('/')}>
            <img src={Loguinho} alt="" />
        </div>
        </>
    )

}