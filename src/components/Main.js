import {Link} from "react-router-dom";
import './Main.css'

import Quadro from './Quadro'


const Main = () => {
    return (
        <div className="container-main">
            <div className="intro-main">
                <div className="title0">
                    OK, MAS O QUE É GET? 🤔
                </div>
                <div className="main-text">
                    O Grupo de Educação Tutorial (GET 🤯) é um grupo formado por estudantes de 
                    universidades federais que buscam contribuir para a melhoria da sociedade, 
                    da graduação e do meio acadêmico através de cursos, capacitações, aulões, 
                    pesquisa e <Link to="/activities">outras atividades</Link>.
                </div>
                <div className="title0">
                    ENGENHARIA COMPUTACIONAL? 🤨
                </div>
                <div className="main-text">
                    Com uma proposta inovadora e ousada, a Universidade Federal de Juiz de Fora
                    fundou o curso de Engenharia Computacional, em conjunto com a Faculdade
                    de Engenharia e o Instituto de Ciências Exatas. O curso tem como característica
                    principal a interdisciplinaridade, utilizando programação de computadores
                    como ferramenta para resolver problemas diversos da Engenharia Civil, Mecânica, Física, 
                    Matemática, Biologia e demais áreas do conhecimento. Ainda em dúvida? Quer saber mais?
                    <Link to="/curso"> Clique aqui e veja nossa página dedicada ao curso</Link>.
                </div>
            </div>
            <div className="avisos">
                <Quadro />
            </div>
        </div>
    )
}

export default Main
