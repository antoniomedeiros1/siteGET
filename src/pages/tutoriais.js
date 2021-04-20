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
                    <ul className="listagem">
                        <Link to="/tutorial/python">
                            <li className="tutorial" >Curso de Python</li>
                        </Link>
                        <Link to="/tutorial/linux">
                            <li  className="tutorial" >Curso de Linux</li>
                        </Link>
                        <Link to="/tutorial/scratch" >
                            <li className="tutorial" >Minicurso de Scratch</li>
                        </Link>
                        <Link to="/tutorial/planilhas">
                            <li className="tutorial" >Planilhas Digitais</li>
                        </Link>
                    </ul>
                    <div className="tutorial">
                        <details>
                            <summary>Planilhas Digitais</summary>
                                <details className="subDetails">
                                    <summary>Ep. 1: Conceitos básicos</summary>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/lajZX8aQ8ZM" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen="true"
                                        style={{margin:"20px"}}>
                                    </iframe>
                                </details>
                                <details className="subDetails">
                                    <summary>Ep. 2: Tabelas, validação, classificação e filtro de dados</summary>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/U-k4hKiDnBE" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen="true"
                                        style={{margin:"20px"}}>
                                    </iframe>
                                </details>
                                <details className="subDetails">
                                    <summary>Ep. 3: Fórmulas/Funções</summary>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/0hUG69yPm7M" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen="true"
                                        style={{margin:"20px"}}>
                                    </iframe>
                                </details>
                                <details className="subDetails">
                                    <summary>Ep. 4: Formatação condicional e gráficos</summary>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/JYQmg2_-84s" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen="true"
                                        style={{margin:"20px"}}>
                                    </iframe>
                                </details>
                        </details>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default tutoriais
