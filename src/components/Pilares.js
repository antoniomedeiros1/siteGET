import {Link} from "react-router-dom";

import './Pilares.css';


const Pilares = () => {
    return (
        <div className="container-fluid-pilares">

            <div className="main-atividades">
                <div className="intro">
                    <div className="title1">
                        ATIVIDADES DO GET
                    </div>
                    <div className="paragrafo">
                        O GET Engenharia Computacional desenvolve projetos com
                        o intuito de retribuir para a sociedade, a graduação e
                        o meio acadêmico. Dentre as atividades do GET podemos citar o ensino de tecnologias
                        para crianças e jovens de escolas públicas, capacitações profissionais,
                        minicursos, aulas de revisão (aulões). <br/> <br/>
                    </div>
                    <div className="title1">
                        TRÍADE
                    </div>
                    <div className="paragrafo">
                        O GET possui três pilares que servem como base para 
                        o desenvolvimento de todas as atividades:
                    </div>
                </div> 

                <Link to="/ensino" className="ensino">
                    <div className="title1">
                        ENSINO 📄✍️
                    </div>
                    <div className="paragrafo">
                        As atividades de ensino são direcionadas para
                        a comunidade acadêmica, visando melhorar a qualidade
                        da formação dos alunos e acompanhá-los ao longo do 
                        percurso acadêmico
                    </div>
                </Link>
                <Link to="/extensao" className="extensao">
                    <div className="title1">
                        EXTENSÃO 👥
                    </div>
                    <div className="paragrafo">
                        Nas atividades de extensão o grupo visa levar 
                        para a comunidade externa o conhecimento adquirido
                        ao longo da graduação
                    </div>
                </Link>
                <Link to="/pesquisa" className="pesquisa">
                    <div className="title1">
                        PESQUISA 🔬
                    </div>
                    <div className="paragrafo">
                        Cada membro desenvolve uma atividade de pesquisa individual
                        relacionada com a Engenharia Computacional, além da organização 
                        de Seminários e projetos de inovações tecnológicas
                    </div>
                </Link>
            </div>
            

        </div >
    )
}

export default Pilares
