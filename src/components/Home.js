import { Link } from "react-router-dom";
import './Main.css'

import Quadro from './Quadro'
import Aulao from '../img/aulao.jpg'
import Minicurso from '../img/minicurso.jpg'

const Home = () => {
    return (
        <div className="container-main">
            <div className="split">
                <div className="title0">
                    Ok, mas o que é um GET? 🤔
                </div>
                <div className="split-text">
                    O Grupo de Educação Tutorial (GET 🤯) é um grupo formado por estudantes de
                    universidades federais que buscam contribuir para a melhoria da sociedade,
                    da graduação e do meio acadêmico através de cursos, capacitações, aulões,
                    pesquisa e <Link to="/activities">outras atividades</Link>.
                </div>
                <div className="title0">
                    Engenharia Computacional? 🤨
                </div>
                <div className="split-text">
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
            <img className="pic" src={Aulao} alt="auloes"></img>
            <div className="split">
                <div className="title0">
                    Aulões
                </div>
                <div className="split-text">
                    O GET-Engenharia Computacional em parceria com os demais Grupos do 
                    Programa de Educação Tutorial dos cursos de Engenharia realiza Aulões 
                    de revisão em diversas disciplinas para os alunos dos Institutos de 
                    Ciências Exatas e da Faculdade de Engenharia. A atividade é destinada a 
                    alunos de todos os cursos, não havendo limite 
                    de vagas. Os grupos esperam que com essa atividade possam contribuir 
                    no aprendizado dos alunos, diminuindo as taxas de reprovação e 
                    evasão dos cursos atendidos.
                </div>
                <div className="split-text">
                    Os aulões sob responsabilidade do grupo atualmente são: 
                    Algoritmos (em parceria com o PET Elétrica), Cálculo Numérico e Mecânica.
                </div>
            </div>
            <div className="split">
                <div className="title0">
                    Minicursos
                </div>
                <div className="split-text">
                    O GET Engenharia Computacional comumente realiza minicursos 
                    acerca do uso de ferramentas tecnológicas que podem 
                    contribuir em diversas áreas, buscando utilizar recursos 
                    relacionados com o curso de Engenharia Computacional. 
                    Atualmente atendem ministrados em um novo formato online, 
                    sendo criados ao longo do tempo novos materiais para novas ideias.
                </div>
            </div>
            <img className="pic" src={Minicurso} alt="auloes" style={{
                transform:"rotate(8deg)"
            }}></img>
        </div>
    )
}

export default Home
