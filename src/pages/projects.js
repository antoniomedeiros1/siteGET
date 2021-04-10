import Header from '../components/Header'
import ProjetosEnsino from '../components/ProjetosEnsino'
import ProjetosExtensao from '../components/ProjetosExtensao'
import SiteFooter from '../components/SiteFooter'

const projects = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-main">
                <ProjetosExtensao></ProjetosExtensao>
                <ProjetosEnsino></ProjetosEnsino>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default projects
