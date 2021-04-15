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
                    <div className="tutorial">
                        <details>
                            <summary>Python</summary>
                        </details>
                    </div>
                    <div className="tutorial">
                        <details>
                            <summary>Linux</summary>
                        </details>
                    </div>
                    <div className="tutorial">
                        <details>
                            <summary>Planilhas Digitais</summary>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lajZX8aQ8ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </details>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default tutoriais
