import {Link} from "react-router-dom";

import './Pilares.css';


const Pilares = () => {
    return (
        <>
            <Link to="/ensino" className="ensino">
                <div className="title-triade">
                    ENSINO 📄✍️
                </div>
                <div className="paragrafo-triade">
                    As atividades de ensino são direcionadas para
                    a comunidade acadêmica, visando melhorar a qualidade
                    da formação dos alunos e acompanhá-los ao longo do 
                    percurso acadêmico
                </div>
            </Link>
            <Link to="/extensao" className="extensao">
                <div className="title-triade">
                    EXTENSÃO 👥
                </div>
                <div className="paragrafo-triade">
                    Nas atividades de extensão o grupo visa levar 
                    para a comunidade externa o conhecimento adquirido
                    ao longo da graduação
                </div>
            </Link>
            <Link to="/pesquisa" className="pesquisa">
                <div className="title-triade">
                    PESQUISA 🔬
                </div>
                <div className="paragrafo-triade">
                    Cada membro desenvolve uma atividade de pesquisa individual
                    relacionada com a Engenharia Computacional, além da organização 
                    de Seminários e projetos de inovações tecnológicas
                </div>
            </Link>
        </ >
    )
}

export default Pilares
