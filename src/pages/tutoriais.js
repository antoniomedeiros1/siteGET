import '../components/Main.css'

import Header from "../components/Header"
import SiteFooter from "../components/SiteFooter"

const tutoriais = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                    Tutoriais
                    </div>
                    <div className="paragrafo">
                        Visando a adaptação das atividades para o funcionamento remoto
                        o grupo desenvolveu uma série de tutoriais acerca de algumas
                        tecnologias importantes tanto para o meio acadêmico quanto para
                        o mercado de trabalho
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default tutoriais
