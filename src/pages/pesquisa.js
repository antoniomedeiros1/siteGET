import '../components/Main.css'
import '../components/Card.css'
import ProjetosPesquisa from '../components/ProjetosPesquisa'
import ProjetosPesquisaAntigos from '../components/ProjetosPesquisaAntigos'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

import Pesquisa from '../img/pesquisa.jpg'

const pesquisa = () => {
    return (
        <div>
            <Header />
            <div className='container-fluid' style={{ backgroundImage: `url(${Pesquisa})` }}>
                <div className='title'>
                    Pesquisa
                </div>
            </div>
            <div className="container-main">
                <div className="text">
                    <div className="title1">Pesquisa 🔎</div>
                    <div className="paragrafo">
                        Cada membro desenvolve uma atividade de pesquisa individual
                        relacionada com a Engenharia Computacional, além da organização 
                        de Seminários e projetos de inovações tecnológicas.
                    </div>
                    <div className = 'title1'>
                        Pesquisas Atuais
                    </div>
                </div>
                <ProjetosPesquisa />
                <div className="text">
                    <div className = 'title1'>
                    Pesquisas Anteriores
                    </div>
                </div>
                <ProjetosPesquisaAntigos />
            </div>
            <SiteFooter />
        </div>
    )
}

export default pesquisa
