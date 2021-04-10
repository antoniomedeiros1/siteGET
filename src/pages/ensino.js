
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'
import Projetos from '../components/ProjetosEnsino'

import Ensino from '../img/ensino.jpg'

const ensino = () => {
    return (
        <div>
            <Header />
            <div className='container-fluid' style={{ backgroundImage: `url(${Ensino})` }}>
                <div className='title'>
                    ENSINO
                </div>
            </div>
            <div className="container-main">
                <div className='text'>
                    <div className="paragrafo">
                        As atividades de ensino são direcionadas para
                        a comunidade acadêmica, visando melhorar a qualidade
                        da formação dos alunos e acompanhá-los ao longo do 
                        percurso acadêmico, oferecendo minicursos e aulas de 
                        revisão de conteúdo (aulões).
                    </div>
                    <div className="paragrafo">
                        As atividades de ensino que o grupo desenvolve atualmente são:
                    </div>
                </div>
                <Projetos />
            </div>
            <SiteFooter />
        </div>
    )
}

export default ensino