import '../components/Main.css'
import '../components/Card.css'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

import Pesquisa from '../img/pesquisa.jpg'

const pesquisa = () => {
    return (
        <div>
            <Header />
            <div className='container-fluid' style={{ backgroundImage: `url(${Pesquisa})` }}>
                <div className='title'>
                    PESQUISA
                </div>
            </div>
            <div className="container-main">
                <div className="text">
                    <div className="paragrafo">
                        Cada membro desenvolve uma atividade de pesquisa individual
                        relacionada com a Engenharia Computacional, além da organização 
                        de Seminários e projetos de inovações tecnológicas.
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default pesquisa
