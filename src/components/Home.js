import { Link } from "react-router-dom";
import './Main.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Quadro from './Quadro'
import Aulao from '../img/aulao.jpg'
import Minicurso from '../img/minicurso.jpg'
import Eventos from '../img/eventos.jpg'

AOS.init();

const Home = () => {

    return (
        <div className="container-main">
            <div className="split">

                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="1000">
                    Ok, mas o que é um GET? 🤔
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="1200">
                    O Grupo de Educação Tutorial (GET) é um grupo formado por estudantes de
                    universidades federais que buscam contribuir para a melhoria da sociedade,
                    da graduação e do meio acadêmico através de cursos, capacitações, aulões,
                    pesquisa e <Link to="/activities">outras atividades</Link>.
                </div>
                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="1000">
                    Engenharia Computacional? 🤨
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="1200">
                    Com uma proposta inovadora e ousada, a Universidade Federal de Juiz de Fora
                    fundou o curso de Engenharia Computacional, em conjunto com a Faculdade
                    de Engenharia e o Instituto de Ciências Exatas. O curso tem como característica
                    principal a interdisciplinaridade, utilizando programação de computadores
                    como ferramenta para resolver problemas diversos da Engenharia Civil, Mecânica, Física,
                    Matemática, Biologia e demais áreas do conhecimento. Ainda em dúvida? Quer saber mais?
                    <Link to="/curso"> Clique aqui e veja nossa página dedicada ao curso</Link>.
                </div>
            </div>
            <Quadro />
            <div className="split">
                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="1200">
                    Aulões 📚
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="1400">
                    O GET-Engenharia Computacional, em parceria com os demais Grupos do 
                    Programa de Educação Tutorial dos cursos de Engenharia, realiza Aulões 
                    de revisão em diversas disciplinas para os alunos dos Institutos de 
                    Ciências Exatas e da Faculdade de Engenharia. A atividade é destinada a 
                    alunos de todos os cursos, não havendo limite 
                    de vagas. Os grupos esperam que, com essa atividade, possam contribuir 
                    no aprendizado dos alunos, diminuindo as taxas de reprovação e 
                    evasão dos cursos atendidos.
                </div>
            </div>
            <div className="pic"
            data-aos="fade-left"
            data-aos-duration="1000">
                <img  src={Aulao} alt="auloes"></img>
            </div>
            <div className="pic"
            data-aos="fade-right"
            data-aos-duration="1300">
                <img src={Minicurso} alt="curso" style={{transform:"rotate(-3deg)"}}></img>
            </div>
            <div className="split">
                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="1300">
                    Minicursos 💻
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="1500">
                    O GET Engenharia Computacional comumente realiza minicursos 
                    acerca do uso de ferramentas tecnológicas que podem 
                    contribuir em diversas áreas, buscando utilizar recursos 
                    relacionados com o curso de Engenharia Computacional. 
                    Atualmente, atendem ministrados em um novo formato online, 
                    sendo criados ao longo do tempo novos materiais para novas ideias.
                </div>
            </div>
            <div className="split">
                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="2500">
                    Eventos 👾
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="2500">
                    O GET participa de diversos eventos, alguns promovidos pela 
                    própria UFJF, como a Semana de Engenharia e a Semana da Computação,
                    nos quais o grupo oferece uma variedade de minicursos acerca do aprendizado
                    de tecnologias como Planilhas Digitais, Python, Linux, Latex, entre
                    outras. Além disso, o grupo participa de enventos regionais com outros
                    PETs e GETs como o InterPET, visando compartilhar com outros grupos experiências de projetos, 
                    e trocar idéias que contribuam para o enriquecimento das atividades desenvolvidas.
                </div>
            </div>
            <div className="pic"
            data-aos="fade-left"
            data-aos-duration="1700">
                <img src={Eventos} alt="eventos"></img>
            </div>
            <div className="split">
                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="1000">
                    Processo Seletivo 🎉
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="1500">
                    O Processo Seletivo 2020.3 para o GET EngComp já foi concluído.
                    O processo contou com 5 participantes, sendo que eram oferecidas
                    duas vagas para bolsistas e duas vagas para voluntários. Fique ligado
                    em nossas redes sociais para saber quando será o próximo 😉
                </div>
            </div>
            <div className="split">
                <div className="title0" 
                data-aos="zoom-in"
                data-aos-duration="1500">
                    Parcerias 🤝
                </div>
                <div className="split-text" 
                data-aos="fade-up"
                data-aos-duration="1700">
                    O GET, atualmente, tem parceria com o PET Elétrica (aulão de Algoritmos) 
                    e com o GET Mecânica (aulã de Mecânica) da UFJF. Além disso, está desenvolvendo 
                    um projeto em parceria com a Escola Oscar Schmidt, em Juiz de Fora, 
                    o qual visa ensinar para os alunos os conceitos básicos 
                    de progamação utilizando a ferramenta Scratch.
                </div>
            </div>
        </div>
    )
}

export default Home
