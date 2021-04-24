import '../components/Main.css'
import {Link} from "react-router-dom";

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
                <ul className="flex-container">
                    <Link to="/tutorial/python">
                        <li className="flex-items" >
                            <h2>Curso de Python</h2>
                            <h3>
                                Série de vídeos sobre conceitos básicos da linguagem Python
                                e Google Colab
                            </h3>
                        </li>
                    </Link>
                    <Link to="/tutorial/linux">
                        <li className="flex-items" style={{backgroundImage:"url(http://lofrev.net/wp-content/photos/2014/10/Linux-logo.png)"}}>
                            <h2>Curso de Linux</h2>
                            <h3>
                                Conceitos básicos do SO Linux e suas intermináveis distribuições
                            </h3>
                        </li>
                    </Link>
                    <Link to="/tutorial/planilhas">
                        <li className="flex-items" style={{backgroundImage:"url(https://www.ifpb.edu.br/itaporanga/noticias/2019/09/inscricoes-abertas-para-curso-de-planilhas-google-intermediario/planilhas-google.png)"}}>
                            <h2>Planilhas Digitais</h2>
                            <h3>
                                Aprenda a utilizar planilhas de forma eficiente e produtiva 
                            </h3>
                        </li>
                    </Link>
                    <Link to="/tutorial/scratch" >
                        <li className="flex-items" style={{backgroundImage:"url(https://meet-and-code.org/pt/pt/event-downloads/3115/)"}}>
                            <h2>Curso de Scratch</h2>
                            <h3>
                                Utilização da ferramenta introdutória à progamação Scratch
                            </h3>
                        </li>
                    </Link>
                    <Link to="/tutorial/octave" >
                        <li className="flex-items" style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/1024px-Gnu-octave-logo.svg.png)"}}>
                            <h2>Curso de Octave</h2>
                            <h3>
                                Aprenda as principais funções da ferramenta muito utilizada em computação numérica
                            </h3>
                        </li>
                    </Link>
                    <Link to="/tutorial/latex" >
                        <li className="flex-items" style={{backgroundImage:"url(https://images.ctfassets.net/nrgyaltdicpt/6gsvc5Ogjmu04I4Miu0uGg/cb1d4391717d2ab8d5e42ede6fb0eef1/overleaf_wide_colour_light_bg.png)"}}>
                            <h2>Curso de LaTex</h2>
                            <h3>
                                Aprenda a utilizar o LaTex dentro do ambiente do Overleaf
                            </h3>
                        </li>
                    </Link>
                </ul>
            </div>
            <SiteFooter />
        </div>
    )
}

export default tutoriais
