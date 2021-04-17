import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './Pilares.css';

AOS.init();

const Pilares = () => {
    return (
        <>
            <div
            data-aos="fade-left"
            data-aos-duration="800">
                <Link to="/activities/ensino" className="pilar">
                    <div className="title-triade">
                        Ensino 📚
                    </div>
                    <div className="paragrafo-triade">
                        As atividades de ensino são direcionadas para
                        a comunidade acadêmica, visando melhorar a qualidade
                        da formação dos alunos e acompanhá-los ao longo do 
                        percurso acadêmico
                    </div>
                </Link>
            </div>
            <div
            data-aos="fade-left"
            data-aos-duration="1000" >
                <Link to="/activities/extensao" className="pilar"
                style={{
                    borderLeftColor: "rgb(27, 136, 238)",
                    color:"rgb(27, 136, 238)"
                    }}>
                    <div className="title-triade">
                        Extensão 👥
                    </div>
                    <div className="paragrafo-triade">
                        Nas atividades de extensão o grupo visa levar 
                        para a comunidade externa o conhecimento adquirido
                        ao longo da graduação
                    </div>
                </Link>
            </div>
            <div
            data-aos="fade-left"
            data-aos-duration="1200">
                <Link to="/activities/pesquisa" className="pilar"
                style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                    <div className="title-triade">
                        Pesquisa 🔎
                    </div>
                    <div className="paragrafo-triade">
                        Cada membro desenvolve uma atividade de pesquisa individual
                        relacionada com a Engenharia Computacional, além da organização 
                        de Seminários e projetos de inovações tecnológicas
                    </div>
                </Link>
            </div>
            
        </ >
    )
}

export default Pilares
