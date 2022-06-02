import { useNavigate } from 'react-router-dom'
import './topics.css'
import Serralheiro from '../../assets/images/statics/serralheria.jpg'
import Arquiteto from '../../assets/images/statics/arquiteto.jpg'
import Programacao from '../../assets/images/statics/programacao.jpg'

export const Topics = () => {
    const navigate = useNavigate()
    return (
        <>
                
            <ul className="topics">
                <li className="item">
                    <img src={Serralheiro} alt="Serralheiria" width={600} height={400} />
                    <div className="collum-flex">
                        <h2>Encontre Serralheiros perto de Você</h2>
                        <button className="btn-info" onClick={() => navigate('/findJob/Serralheiro')}>
                            Saiba Mais
                        </button>
                    </div>

                </li>
                <li className="item">
                <img src={Arquiteto} alt="Arquitetura" width={600} height={400} className="mobile-image"/>
                <div className="collum-flex">
                    <h2>Encontre Arquitetos perto de Você</h2>
                    <button className="btn-info"  onClick={() => navigate('/findJob/arquiteto')}>
                        Saiba Mais
                    </button>
                </div>
                    <img src={Arquiteto} alt="Arquitetura" width={600} height={400} className="desktop-image" />
                </li>
                <li className="item">
                    <img src={Programacao} alt="Programacao" width={600} height={400} />
                <div className="collum-flex">
                    <h2>Encontre Profissionais de Programação</h2>
                    <button className="btn-info">
                        Saiba Mais
                    </button>
                </div>
                </li>
            </ul>
        
        </>
    )
}
