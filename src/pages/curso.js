import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

/*
estava como segundo paragrafo, mas nao tem como comentar dentro do bloco, entao deixei aqui
                    <div className="paragrafo">
                        Como algumas das, 
                        temos a realização de diversos minicursos, aulas de revisão de 
                        conteúdo de matérias da graduação e projetos de acompanhamento 
                        de novos ingressantes no curso. Já no meio da <Link to="/activities/pesquisa">pesquisa</Link>, além de 
                        cada membro do grupo realizar a sua própria, o grupo organiza 
                        atividades de <Link to="/activities/seminarios">Seminários</Link> de 
                        pesquisas na área do curso e possuí alguns projetos que visam a inovação tecnológica.
                    </div>
*/

const about = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <iframe
                    style={{display: "block", margin: "auto"}}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/50CXmj47NKE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
                <div className="text">
                    <div className="title1">
                        Sobre a Engenharia Computacional
                    </div>
                    <div className="paragrafo">
                        Por ser um curso multidisciplinar, muitas pessoas não entendem o que os 
                        alunos, gradudandos e graduados em Engenharia Computacional estudam. O curso 
                        possui como foco a Modelagem Computacional, que tem como objetivo construir 
                        representações simplificadas de problemas complexos das Ciências Exatas e 
                        Naturais, através de simulações dos fenômenos reais. 
                    </div>
                </div>
                <div className="text">
                    <div className="title1">
                        A Importância da Modelagem
                    </div>
                    <div className="paragrafo">
                        Ok, mas qual é a importância em ser capaz de modelar computacionalmente 
                        um fenômeno? A Modelagem Computacional permite encontrar relações entre 
                        as variáveis que compôem um evento, além de formular e testar teorias que 
                        descrevam bem seu comportamento. Dessa forma, ela possibilita que 
                        fenômenos complexos sejam representados por processos mais simples e que 
                        possam ser descritos por modelos compreensíveis. A Engenharia Computacional 
                        apresenta aplicação em diversas areas, a exemplo de:
                        <br />
                        <br />
                        <ul>
                            <li>Análise de Estruturas</li>
                            <li>Cálculo de Tensões em Veículos</li>
                            <li>Simulação de Impactos Ambientais</li>
                            <li>Previsão do Tempo</li>
                            <li>Extração de Petróleo</li>
                            <li>Dinâmica dos Fluidos e Aerodinâmica</li>
                            <li>Atividade Eletromecânica do Coração</li>
                            <li>Avaliação da Disseminação de Doenças</li>
                        </ul>
                    </div>

                    <div className="title1">
                        Proposta do Curso
                    </div>
                    <div className="paragrafo">
                        Explicar a proposta do curso
                    </div>
                    <div className="paragrafo">
                        A origem
                    </div>
                    <div className="paragrafo">
                        Colocar o PPC novo
                    </div>

                    <div className="title1">
                        Destaques no Curso
                    </div>
                    <div className="paragrafo">
                    O Professor Bernardo Martins Rocha, do Programa de Pós-graduação em Modelagem Computacional, foi ganhador do Prêmio Capes de Tese 2015 na área Interdisciplinar sob orientações de professores do PGMC/UFJF: Elson Magalhães Toledo, Rodrigo Weber dos Santos e Luis Paulo da Silva Barra.
                    </div>
                    <div className="paragrafo">
                    O pesquisador Rodrigo Weber, do Departamento de Ciência da Computação da Universidade Federal de Juiz de Fora (UFJF), recebeu em 2019 o reconhecimento internacional através do prêmio Endeavour Research Leadership promovido pelo Departamento de Educação e Treinamento do governo australiano.
                    </div>
                    <div className="paragrafo">
                    Mais detalhes sobre esses trabalhos podem ser encontrados na <Link to="/curso/trabalhos">Engenharia Computacional em Movimento</Link>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default about
