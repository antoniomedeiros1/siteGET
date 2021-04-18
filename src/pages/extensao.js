import ProjetosExtensao from '../components/ProjetosExtensao'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'
import Extensao from '../img/extensao.jpg'

const extensao = () => {
    return (
        <div>
        <Header />
        <div className='container-fluid' style={{ backgroundImage: `url(${Extensao})` }}>
            <div className='title'>
                Extensão
            </div>
        </div>
        <div className="container-main">
            <div className='text'>
                <div className="title1">
                    Extensão 👥
                </div>
                <div className="paragrafo">
                    Nas atividades de extensão o grupo visa levar 
                    para a comunidade externa o conhecimento adquirido
                    ao longo da graduação. Partindo dessa proposta, o grupo
                    desenvolve uma série de projetos em parcerias com escolas públicas
                    e organizações educacionais, oferecendo cursos de tecnologias
                    relacionadas com a Engenharia Computacional,
                    importantes para o mercado de trabalho e para o ensino, 
                    tendo como objetivo secundário a divulgação do curso.
                </div>
                <div className="paragrafo">
                    Atualmente, o grupo trabalha nos seguintes projetos de extensão:
                </div>
            </div>
            <ProjetosExtensao />
        </div>
        <SiteFooter />
            
        </div>
    )
}

export default extensao
