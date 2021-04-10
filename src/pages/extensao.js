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
                EXTENSÃO
            </div>
        </div>
        <div className="container-main">
            <div className='text'>
                <div className="paragrafo">
                    Nas atividades de extensão o grupo visa levar 
                    para a comunidade externa o conhecimento adquirido
                    ao longo da graduação.
                </div>
            </div>
            <ProjetosExtensao />
        </div>
        <SiteFooter />
            
        </div>
    )
}

export default extensao
