import { Link } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion"
import './Main.css'

import Quadro from './Quadro'
import Aulao from '../img/aulao.jpg'
import Minicurso from '../img/minicurso.jpg'
import Eventos from '../img/eventos.jpg'

const Home = () => {

    const { scrollYProgress } = useViewportScroll();

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
            <Quadro />
            <div className="split">
                <div className="title0">
                    Aulões 📚
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
            </div>
            <motion.div 
                whileHover={{ scale: 1.5 }}
                className="pic">
                <img  src={Aulao} alt="auloes"></img>
            </motion.div>
            <div className="split">
                <div className="title0">
                    Minicursos 💻
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
            <motion.div 
                whileHover={{ scale: 1.5 }}
                className="pic">
                <img src={Minicurso} alt="curso" style={{transform:"rotate(-3deg)"}}></img>
            </motion.div>
            <div className="split">
                <div className="title0">
                    Eventos 👾
                </div>
                <div className="split-text">
                    O GET participa de diversos eventos, alguns promovidos pela 
                    própria UFJF como a Semana de Engenharia e a Semana da Computação,
                    onde o grupo oferece uma variedade de minicursos acerca do aprendizado
                    de tecnologias como Planilhas Digitais, Python, Linux, Latex, entre
                    outras. Além disso, o grupo participa de enventos regionais com outros
                    PETs e GETs como o InterPET, visando o compartilhamento dos projetos
                    com outros grupos e trocar idéias, que contribui para o enriquecimento
                    das atividades desenvolvidas.
                </div>
            </div>
            <motion.div 
                whileHover={{ scale: 1.5 }}
                className="pic">
                <img src={Eventos} alt="eventos"></img>
            </motion.div>
            <div className="split">
                <div className="title0">
                    Processo Seletivo 🎉
                </div>
                <div className="split-text">
                    O Processo Seletivo 2020.3 para o GET EngComp já foi concluído.
                    O processo contou com 5 participantes, sendo que eram oferecidas
                    duas vagas para bolsistas e duas vagas para voluntários. Fique ligado
                    em nossas redes sociais para saber quando rolar o próximo 😉
                </div>
            </div>
            <div className="split">
                <div className="title0">
                    Parcerias 🤝
                </div>
                <div className="split-text">
                    O GET atualmente tem parceria com o PET Elétrica UFJF
                    (aulão de Algoritmos) e com o GET Mecânica (aulão
                    de Mecânica). Além disso, esta desenvolvendo um projeto
                    em parceria com a Escola Oscar Schmidt em Juiz de Fora 
                    que visa ensinar para os alunos os conceitos básicos 
                    de progamação utilizando Scratch.
                </div>
            </div>
        </div>
    )
}

export default Home
