import '../components/Main.css'
import '../components/Card.css'

import Trafego from '../img/trafego.jfif'
import Inibe from '../img/inibecovid.jfif'
import Circuito from '../img/circuito.jfif'
import Grafo from '../img/grafo.jfif'
import Remedio from '../img/remedio.jfif'
import Twitter from '../img/twitter.png'
import D20 from '../img/d20.jpg'
import Fluid from '../img/fluid.jfif'

const ProjetosExtensao = () => {
    return (
        <div>
            <button type="button" class="collapsible"><h2>2020</h2></button>
            <div class="collapsible-content">
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
            </div>

            <button type="button" class="collapsible"><h2>2019</h2></button>
            <div class="collapsible-content">
            <div className='card'>
                    <div className="card-content">
                        <h3>
                            O uso de modelagem matemática para o balanceamento de jogos
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>André Felipe de Souza Mota<br/>
                        <h4><b>Orientador: </b></h4> Prof. Igor de Oliveira Knop (DCC)<br/>
                        <br/>
                        Descrição: Jogos digitais utilizam-se de diversas medidas matemáticas. Todavia, conforme a complexidade aumenta, é comum que a estrutura de um jogo apresente elementos não condizentes com o restante do mesmo e não proporcione a experiência pretendida. Para esta pesquisa, focou-se em combates de jogos do gênero RPG. O sistema de combate pode ser modelado matematicamente e, a partir dos resultados, pode-se identificar aspectos que o comprometem. Como objetivo geral espera-se desenvolver um novo método para o projeto de jogos que permita a modelagem, avaliação e melhoria dos diversos mecanismos envolvidos em busca de um melhor balanceamento matemático de um jogo. Ou seja, objetivou-se um método apoiado por computação que permita se criar um jogo onde todos os seus elementos componentes possuam um valor tático ou estratégico equivalente.
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={D20} alt="d20"></img>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Estudo de estabilidade de interação entre proteínas e ligantes através de simulações de dinâmica molecular
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Gabriele Cesar Iwashima<br/>
                        <h4><b>Orientador: </b></h4>Prof. Priscila Vanessa Zabala Capriles Goliatt (MAC)<br/>
                        <br/>
                        A modelagem 3D se caracteriza por possuir aplicações práticas com impactos relevantes na área terapêutica, estando diretamente relacionada a múltiplas áreas da bioinformática, biologia computacional e modelagem molecular. Em relação a Dinâmica Molecular (DM), esta é uma ferramenta computacional usada para descrever a variação do comportamento molecular. Dessa maneira, podemos estudar modelos 3D de compostos mais próximos da realidade, considerando características como flexibilidade molecular e temperatura. Neste projeto estudou-se possíveis conformações estruturais, utilizando os conceitos citados posteriormente, da molécula de dhmtAc, possível fármaco para tratamento da leishmaniose
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Remedio} alt="remedio"></img>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Classificação de Rumores utilizando Máquina de Vetores Suporte
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Gustavo Albuquerque Ferraz<br/>
                        <h4><b>Orientador: </b></h4>Prof. Stênio Sã Rosário Furtado Soares (DCC)<br/>
                        <br/>
                        Descrição: A propagação de rumores é um problema que pode causar danos graves à imagem de uma pessoa, organização, ou até mesmo gerar pânico entre os cidadãos. Um exemplo conhecido que demonstra a gravidade do problema é uma notícia falsa publicada no Twitter em 2013 sobre duas explosões que teriam acontecido na Casa Branca. Poucos minutos após a notícia ser publicada, foi registrado um tombo momentâneo na bolsa de valores.Tendo em vista os danos que a propagação de rumores pode causar à sociedade como um todo, estudou-se a utilização de máquina de vetores suporte como uma alternativa para a classificação de rumores no Twitter, uma das redes sociais mais populares atualmente
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Twitter} alt="twitter"></img>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Métodos numéricos aplicados à solução de problemas de mudança de fase.
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Vinícius Receputi Moraes<br/>
                        <h4><b>Orientador: </b></h4>Prof. Elson Magalhães Toledo (MAC)<br/>
                        <br/>
                        Descrição: Problemas de mudança de fase são de interesse das áreas da ciência, engenharia e industrial. Em processos de solidificação, por exemplo, a ocorrência de trincas e formações de vazios causados por uma redução na capacidade de resistir a esforços mecânicos geralmente são observados, e é de grande importância prever esses comportamentos para que possam ser evitados. A discretização das equações que descrevem esse fenômeno é de extrema importância, já que o custo computacional para o cálculo do problema depende desta discretização. O objetivo é a discretização das equações diferenciais que regem o problema matemático de mudança de fase, e a realização de simulações computacionais dos resultados utilizando o Método dos Volumes Finitos.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">
                        <h3>
                            Métodos numéricos para simulação de escoamentos de fluidos viscosos, newtonianos e incompressíveis
                        </h3>
                        <p>
                        <h4><b>Aluno:</b></h4>Yuri Ramos Corrêa<br/>
                        <h4><b>Orientador: </b></h4>Prof. Iury Higor Aguiar da Igreja (DCC)<br/>
                        <br/>
                        Descrição: Métodos numéricos para simular escoamentos de fluidos viscosos, newtonianos e incompressíveis têm sido largamente desenvolvidos devido à diversas aplicações em vários campos da pesquisa de mecânica dos fluidos. Estes fenômenos podem ser modelados pelas equações de Navier-Stokes que são governadas pelas equações do momento linear e do balanço de massa. O problema de Navier-Stokes tem se mostrado ainda hoje bastante desafiador devido às suas características de não linearidade e de instabilidade numérica geradas por valores elevados do número de Reynolds (que relaciona efeitos convectivos com efeitos viscosos) que dão origem a escoamentos predominantemente convectivos. Estas propriedades tornam a aproximação numérica deste problema bastante complexa. Além disso, os métodos numéricos empregados para resolução deste problema pressupõem a aproximação simultânea dos campos de velocidade e pressão. O objetivo deste projeto era o desenvolvimento de metodologias numéricas e implementação computacional visando a simulação de problemas de escoamentos de fluidos viscosos incompressíveis governados pelas equações de Navier-Stokes utilizando os métodos de diferenças finitas. Como objetivo final, buscou-se derivar e implementar um método de diferenças finitas estável e capaz de simular o problema de escoamento viscoso com elevados valores do número de Reynolds.
                        </p>
                    </div>
                    <div className="card-icon">
                        <img src={Fluid} alt="fluid"></img>
                    </div>
                </div>
            </div>


            <button type="button" class="collapsible"><h2>2018</h2></button>
            <button type="button" class="collapsible"><h2>2017</h2></button>
            
        </div>
        
    )
}

export default ProjetosExtensao
