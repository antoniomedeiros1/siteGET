import '../components/Main.css'
import '../components/Card.css'

import Trafego from '../img/trafego.jfif'
import Inibe from '../img/inibecovid.jfif'
import Circuito from '../img/circuito.jfif'
import Grafo from '../img/grafo.jfif'

const ProjetosExtensao = () => {
    return (
        <div>
            <button type="button" class="collapsible"><h2>2020</h2></button>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Autômatos Celulares aplicado à Simulação de Tráfego Viário
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Alexandre Vitor Silva Braga<br/>
                        <h4><b>Orientador: </b></h4>Prof. Elson Magalhães Toledo (MAC)<br/>
                        <br/>
                        Descrição: Os autômatos celulares são modelos de evolução temporal simples com capacidade para exibir comportamento complicado ao longo de uma simulação. Portanto, para entender o tráfego viário, modelá-lo utilizando esta técnica ajudaria a entender sua como comportamentos simples afetam sua complexa dinâmica.
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Trafego} alt="trafego"></img>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Modelos de aprendizado de máquina para a previsão de atividade de inibidores da Main Protease de SARS-CoV-2
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Caio Cedrola Rocha<br/>
                        <h4><b>Orientador: </b></h4>Prof. Diego Enry Barreto Gomes (DCC)<br/>
                        <br/>
                        Descrição: A Main Protease da SARS-CoV-2 (MPro) é uma das proteínas mais estudadas para o desenvolvimento de um tratamento efetivo contra a COVID-19, pois atua na maturação viral, contribuindo para a sua replicação. Visto isso, a procura por moduladores da MPro, que inibiriam ou reduziriam a carga viral, é crucial para a descoberta de fármacos que funcionem contra a doença. Estratégias de biofísica computacional, como o docking molecular e a triagem virtual (VS), têm papel importante nessa procura, pois conseguem filtrar grandes bibliotecas de compostos bioquímicos para encontrar aqueles com maior potencial farmacológico. Diversos compostos têm sido ensaiados bioquimicamente contra a MPro. No entanto, a correlação dos ensaios bioquímicos com as estratégias computacionais mostram que estas  falharam categoricamente em classificar compostos potencialmente ativos, que inibam a atividade da MPro, bem como em ordená-los de acordo com sua potência (ranking). Normalmente, isso é causado por limitações nas funções empíricas usadas para pontuar os compostos, que são calibradas para reproduzir as afinidades de ligação de um conjunto de dados de complexos moleculares. Essa abordagem generalista pode não levar em conta as particularidades do microambiente químico entre um complexo receptor e ligante arbitrário. Os modelos de aprendizado de máquina (machine learning, ML) têm se mostrado uma ferramenta essencial para a previsão de dados da atividade de compostos, pois são modelos que levam em conta as características específicas dos compostos. Desse modo, eles conseguem classificá-los de acordo com as suas atividades, contribuindo, assim, para ordená-los segundo suas probabilidades de funcionarem como inibidores do vírus.
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Inibe} alt="inibe"></img>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Meta-heurísticas para o problema da Árvore Geradora de Rotulação Mínima
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Gustavo Albuquerque Ferraz<br/>
                        <h4><b>Orientador: </b></h4>Prof. Stênio Sá Rosário Furtado Soares (DCC) e coorientação da Prof. Lorenza Leão Oliveira Moreno (DCC) e Prof. Luciana Brugiolo Gonçalves (DCC)<br/>
                        <br/>
                        Descrição: Dado um grafo rotulado nas arestas, o MLSTP tem como objetivo encontrar uma árvore geradora com um número mínimo de rótulos. Dentre as os algoritmos utilizados na literatura para resolver este problema estão o VNS (Variable Neighborhood Search), GRASP (Greedy Randomized Adaptive Search Procedure) e mais recentemente o MSLB (Multi-start Local Branching Procedure). Esta pesquisa tem como objetivo desenvolver e testar novos métodos e algoritmos para este problema com o intuito de gerar resultados competitivos com os da literatura.
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Grafo} alt="grafo"></img>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Programação Genética Cartesiana Multiobjetivo na Geração de Circuitos Digitais
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Lucas Augusto Müller de Souza<br/>
                        <h4><b>Orientador: </b></h4>Heder Soares Bernardino (DCC)<br/>
                        <br/>
                        Descrição: O projeto de circuitos digitais trata-se de uma atividade de alta complexidade e alto custo, desenvolvida por especialistas através de regras bem definidas. Com o objetivo de acelerar o processo de desenvolvimento e testagem de circuitos, além de diminuir o custo, pode-se utilizar métodos de Inteligência Computacional, já que estes se provaram capazes de testar diversas possibilidades, os quais não seriam passíveis de serem obtidos por projetistas. Em nossas pesquisas a Programação Genética Cartesiana (PGC) foi utilizada para projetar circuitos, já que este método é considerado o estado da arte no projeto de circuitos, considerando um ou mais objetivos.
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Circuito} alt="circuito"></img>
                    </div>
                </div>
            <button type="button" class="collapsible"><h2>2019</h2></button>
            <div class="collapsible-content">
                <p>Lorem ipsum...</p>
            </div>
            <button type="button" class="collapsible"><h2>2018</h2></button>
            <button type="button" class="collapsible"><h2>2017</h2></button>
            
        </div>
        
    )
}

export default ProjetosExtensao
