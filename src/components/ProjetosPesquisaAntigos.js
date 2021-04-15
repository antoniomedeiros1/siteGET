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
import Sismico from '../img/sismico.jpg'
import SistemaImune from '../img/sistemaImune.jpg'

const ProjetosExtensao = () => {
    return (
        <div>
            <details class="collapsible" style={{margin:"20px"}}>
                <summary style={{fontSize:"25px"}}>2020</summary>
                <div class="collapsible-content">
                    <br />
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
            </details>
            

            <details className="collapsible" class="collapsible" style={{margin:"20px"}}>
                <summary style={{fontSize:"25px"}}>2019</summary>
                <div className="collapsible-content">
                    <br />
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
                                Implementação e Análise de Modelos Matemáticos para Simulação do Sistema Imune
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Giulia Fritz Iennaco<br/>
                            <h4><b>Orientador: </b></h4>Prof. Ruy Freitas Reis (DCC)<br/>
                            <br/>
                            Descrição: O Sistema Imunológico Humano é um conjunto complexo de defesa do corpo humano e é essencial para a sobrevivência da espécie, atuando no combate a patógenos ou células que apresentem comportamento anormal e renovação celular. Existem dois tipos de sistema imune: inato e adquirido. O sistema imune inato está presente desde o nascimento, é a primeira linha de defesa e combate rapidamente infecções. O sistema imune adaptativo, por outro lado, é adquirido através de um contato inicial com diferentes agentes invasores. Após esse primeiro contato, o sistema adquire capacidade de reconhecer especificamente um microorganismo, gerando uma memória imunológica, que atribui proteção à futuras exposições ao mesmo. Dada a notável importância deste sistema, é fundamental que se estude seu funcionamento, portanto foram desenvolvidos modelos matemáticos e computacionais que descrevem seu comportamento. No entanto, no tocante à naturezas biológicas do corpo humano, descrever matematicamente seu funcionamento não é uma tarefa trivial, e pode haver dificuldades em aferir com precisão os parâmetros para estes modelos, o que pode torná-los não realísticos. O objetivo deste trabalho foi a implementação de modelos de simulação do Sistema Imune Humano e a quantificação de incertezas quantificar incertezas relacionadas aos parâmetros de um modelo, e também a sensibilidade do mesmo. Desta forma, foram analisados alguns parâmetros que podem variar de acordo com o patógeno ou condição de saúde do indivíduo, e quantificar sua influência em modelos matemáticos.
                            </p>
                        </div>
                        <div className="card-icon">
                            <img src={SistemaImune} alt="sistemaimune"></img>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Métodos numéricos aplicados à análises sísmicas
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4> João Victor Lopes Borges<br/>
                            <h4><b>Orientador: </b></h4>Prof. Elson Magalhães Toledo (MAC)<br/>
                            <br/>
                            Descrição: Métodos numéricos para avaliar e simular análises sísmicas e seus desdobramentos são soluções, exploradas tanto no âmbito acadêmico quanto no mercado de interesse, como é o caso de grandes companhias petrolíferas. Neste estudo, englobando as áreas de ciências exatas, computação e engenharia, o propósito se da pela busca da comprovação de um novo método mais eficaz e menos custoso em termos de processamento computacional, com o intuito de avaliar simulações sísmicas. Utilizando ferramentas já comprovadamente eficientes no que diz respeito a métodos de discretização. O objetivo deste projeto era a realização de simulações computacionais, com base em equações diferenciais que comandam o comportamento de ondas sísmicas devidamente discretizadas, através de métodos conceituados pela literatura.
                            </p>
                        </div>
                        <div className="card-icon">
                            <img src={Sismico} alt="sismico"></img>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Métodos numéricos aplicados à solução de problemas de mudança de fase
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
            </details>


            <details className="collapsible" class="collapsible" style={{margin:"20px"}}>
                <summary style={{fontSize:"25px"}}>2018</summary>
                <div className="collapsible-content">
                    <br />
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Avaliação do Impacto da Afinidade de Processador no Desempenho de Aplicações Paralelas Executadas em Ambientes de Memória Compartilhada
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Carlos Alexandre de Almeida Pires<br/>
                            <h4><b>Orientador: </b></h4>Prof. Marcelo Lobosco (DCC)<br/>
                            <br/>
                            Descrição: O emprego de técnicas de computação de alto desempenho é importante para o desenvolvimento de novas tecnologias, especialmente em áreas com grande demanda computacional, como as que envolvem simulações no computador. Por melhor que seja o desempenho teórico de uma aplicação, seu desempenho real pode ser limitado por conta de escolhas de escalonamento de processos (ou tarefas) feitas pelo sistema operacional. Logo, em alguns casos a afinidade de processador (Processor Affinity) - colocar na medida do possível a tarefa no mesmo núcleo num processador com mais de um núcleo - pode aumentar o rendimento dos programas.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Otimização   de   protocolo   de   roteamento   para   redes   em malha em dispositivos IoT nas áreas Industriais e Saúde
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Frederico O. Sales<br/>
                            <h4><b>Orientadores: </b></h4>Prof. Alex Borges (DCC), Prof. Eduardo Pagani (DCC) e Prof. Edelberto Franco (DCC)<br/>
                            <br/>
                            Descrição: O problema de grande fluxo de dados relativos ao roteamento de redes em malha para dispositivos IoT nas aplicações industriais e saúde   prejudicam   a   durabilidade   da   malha   de   sensores   e compromete a entrega de pacotes úteis ao sensoriamento das áreas específicas. O objetivo do trabalho é otimizar o protocolo RPL para melhor aproveitamento   energético   e   priorizando   a   entrega   de   dados relevantes ao sensoriamento reduzindo o tráfego desnecessário na malha.   Utilizamos   otimizações   na   rota   através   de   modelos matemáticos que levou a novas topologias e funções objetivos mais relevantes,   implementando   métricas   mais   restritas   quanto   ao tráfego   desnecessário   de   pacotes   de   roteamento,   e   por consequência garantindo maior durabilidade da rede de sensores.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Reconhecimento de Padrões em Interface de Suporte à Interação
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Gabriel de Oliveira Machado<br/>
                            <h4><b>Orientador: </b></h4>Prof. Carlos Cristiano Hasenclever Borges (DCC)<br/>
                            <br/>
                            Descrição: Métodos de visão computacional vêm sendo aplicados nas mais diversas áreas do conhecimento, principalmente com o objetivo de identificar padrões e classificar conjuntos de elementos ou comportamentos. Como forma de permitir avaliações mais complexas e precisas, algumas técnicas de aprendizado de máquina e inteligência artificial podem ser aplicadas em conjunto com a visão computacional, tais como Redes Neurais, Algoritmo Genético, etc. Métodos como estes podem exigir diferentes níveis de processamento, e podem gerar altos custos computacionais, dificultado a implementação em sistemas que precisem de resposta em tempo real. Em particular, será estudado o caso de um sistema que determina a direção na qual o usuário está olhando, baseado em imagens frontais do rosto deste, possivelmente capturadas por uma câmera de vídeo. Tal sistema deve ser capaz de analisar as imagens recebidas e responder com a ação associada à direção na qual o usuário está olhando, de forma precisa e em tempo real, garantindo a interação do usuário com o sistema suportado. Objetivou-se avaliar o comportamento de diferentes métodos para a avaliação das imagens recebidas pelo sistema. Mais especificamente, abordar métodos de aprendizado de máquina que consigam reconhecer os múltiplos padrões com precisão satisfatória e, posteriormente, avaliar formas de melhorar o tempo de resposta e consumo de processamento. Assim, objetiva-se um método com boa precisão e capacidade de resposta em tempo real.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                            Identificação de timbres de instrumentos musicais utilizando métodos de inteligência computacional
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Guilherme Almeida Felix da Silva<br/>
                            <h4><b>Orientador: </b></h4>Prof. Marcos Mendonça Passini (DCC)<br/>
                            <br/>
                            Descrição: A onda sonora pode ser entendida como uma alteração de pressão que se propaga no espaço tridimensional. No caso da música, é um fenômeno periódico produzido pela vibração de cordas, colunas de ar, paletas ou membranas. Esse movimento é descrito por uma equação diferencial de segunda ordem cuja solução geral é uma função senoidal. Do ponto de vista físico, uma nota musical é um som com frequência definida. Diversos instrumentos podem emitir a mesma nota, porém é possível identificar o emissor por meio de uma característica denominada timbre. Embora simples de se classificar para um ouvinte treinado, computacionalmente é um processo complexo, de modo que diversos são os modelos usados para representar e classificar o timbre. A identificação de um instrumento em um arquivo de áudio abre portas para investigação de métodos computacionais voltados ao reconhecimento de acordes e análise musical. O objetivo deste trabalho é identificar o timbre de 8 instrumentos (violoncelo, clarineta, flauta, oboé, trombone, trompete, viola e violino), registrados em arquivos .wav com taxa de amostragem 44100 Hz contendo o som de cada instrumento separadamente, emitindo apenas uma nota, utilizando métodos de aprendizagem de máquina, como KNN, SVM e RNA, e elementos obtidos por meio da transformada rápida de Fourier como atributos para a classificação
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Análise de Dados Gerados por Energia Solar em Construções
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Iago Gomes de Lima Rosa<br/>
                            <h4><b>Orientador: </b></h4>Prof. Leonardo Goliatt da Fonseca (MAC)<br/>
                            <br/>
                            Descrição: Eficiência energética é um dos campos de maior interesse em estudo na área de energia limpa e renovável, buscando melhorar o consumo de energia de maneira racional. Uma dessas fontes energéticas é o sol. Analisando a incidência de raios solares e a energia gerada por eles em uma casa e/ou edifício de uma determinada área geográfica ao longo do tempo, pode-se prever como será o comportamento energético resultante para os próximos anos. Com isso, pode-se analisar, posteriormente, qual é a melhor forma para que a construção estudada aproveite a energia gerada pelo sol, realizando, assim, consumo energético inteligente. Neste projeto, pretendia-se simular construção de uma determinada área geográfica e fazer testes com informações climáticas disponíveis. Para isso, foi utilizado o software SketchUp com os plug-ins OpenCV e EnergyPlus que gera os resultados simulados pela situação climática informada. A partir desses dados, seria possível gerar as previsões para o próximo ano. 
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Caracterização e Análise de Dados do Setor Bancário da Zona do Euro no Período da Crise de 2008
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Iago Gomes de Lima Rosa<br/>
                            <h4><b>Orientador: </b></h4>Prof. Leonardo Goliatt da Fonseca (MAC)<br/>
                            <br/>
                            Descrição: A crise financeira de 2008 afetou os bancos da zona euro, composta pela União Europeia. Existe o interesse em entender e explicar o ocorrido nesse período. Dessa forma, através da base de dados Bankscope, o qual há informações dos balancetes bancários entre os anos de 2006 e 2014, objetiva-se com esse trabalho o estudo e interpretação dos dados através de uma análise descritiva e com técnicas de análise de dados para caracterizar a base e classificar os bancos nos períodos pré e pós crise. O objetivo deste trabalho é aplicar os conhecimentos adquiridos durante o curso sobre análise de dados e aprendizado de máquina, de forma a justificar computacionalmente o ocorrido na crise financeira de 2008 através da base de dados disponível. Espera-se conseguir criar um modelo de análise de crises bancárias a fim de compreender outras crises bancárias, que já ocorreram ou ocorrerão, no âmbito mundial.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Modelos descontı́nuos para o problema de autovalor em estruturas reticuladas
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Jhuan Barbosa da Silva e Cedro<br/>
                            <h4><b>Orientador: </b></h4>Prof. Carlos Cristiano Hasenclever Borges (DCC)<br/>
                            <br/>
                            Descrição: Estratégias para avaliação da segurança de estruturas como edifícios altos, pontes, hospitais, podem ser cruciais para assegurar que estão em boas condições de uso, sem perigo para os usuários em geral. Modelos para detecção de partes danificadas em tais estruturas têm sido desenvolvidos utilizando metodologias diversas. Assim, geralmente é necessário um modelo numérico da estrutura que permita a determinação de mudanças entre estados não danificados e danificados da mesma, indicando variação de desempenho em algum de seus componentes. Usualmente, o método dos elementos finitos (MEF) é adotado para tal. Modelos de detecção de dano estrutural, geralmente introduzem parâmetros associados a perda de rigidez dos elementos, indicativos diretos do nível de perda da funcionalidade dos elementos. Desta forma, um maior nível de desacoplamento dos elementos construtivos do modelo permite uma melhor avaliação das perdas estruturais em nível elementar. Neste trabalho, objetivou-se implementar um modelo de MEF para cálculo das frequências naturais e modos de vibração da estrutura monitorada, que permita um maior controle no nível de desacoplamento dos elementos que compõem a peça estrutural avaliada.
                            </p>
                        </div>
                    </div>
                    
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Modelagem Molecular, Simulação Computacional, Dinâmica Molecular, Derivado Triazólico de Miltefosina
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Ruan Medina Carvalho<br/>
                            <h4><b>Orientador: </b></h4>Prof.ª Priscila Vanessa Zabala Capriles Goliatt (DCC)<br/>
                            <br/>
                            Descrição: A Leishmaniose é uma doença causada por protozoários parasitas do gênero Leishmania e transmitida através da picada de certos tipos de flebotomíneos. Mesmo afetando milhões de pessoas ao redor do mundo, a doença é tida como negligenciada pela indústria farmacêutica por apresentar altos custos no desenvolvimento de novas drogas, mas pouco retorno financeiro à indústria. Este trabalho consiste no estudo computacional do sal 1,4-distribuído-1,2,3-triazol interagindo com um ânion de acetato (dhmtAc). Tal molécula é tida como possível fármaco contra a Leishmania, apresentando mais eficiência contra o parasito e menos toxicidade para o corpo se comparado com fármacos já comercializados. O objetivo é estudar o comportamento de diferentes concentrações dessa molécula em soluções aquosas com diferentes concentrações iônicas e entender o mecanismo característico de formação micelar observado em laboratório. Para isso, utiliza-se de técnicas de simulação computacional em dinâmica molecular. 
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                O Método da Cadeia de Markov Aproximada com Malhas Locais para Problemas de Filtragem Não-Linear
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4> Vitor Monteiro Andrade Goulart<br/>
                            <h4><b>Orientadores: </b></h4>Prof. Leonardo Goliatt do Departamento de Mecânica Aplicada e Computacional da Universidade Federal de Juiz de Fora e Prof. Saul de Castro Leite, da Universidade Federal do ABC<br/>
                            <br/>
                            Descrição: Problemas de filtragem consistem em estimar o estado atual de um sistema dinâmico (não-observado) modelado por um processo estocástico, solução de uma equação diferencial estocástica. O estado desse sistema não pode ser determinado diretamente a não ser através das observações disponíveis, que são valores (distorcidos por ruídos independentes) resultantes da aplicação de uma função sobre o estado atual. Quando os termos de deriva(média infinitesimal, na equação é a função que é aplicada no processo), matriz de dispersão, ou a função do processo de observação são não-lineares, é sabido que o problema de filtragem não pode ser resolvido de forma exata com um número finito de cálculos. Para esses problemas, conhecidos como problemas de filtragem não-linear, métodos numéricos podem ser empregados para aproximar o valor da esperança condicional do processo dado às observações (que é o melhor filtro possível). Esse problema tem várias aplicações práticas, como em sistemas de rastreamento de objetos, em sistemas filas, em finanças entre outros. Objetivou-se estudar métodos numéricos para problemas de filtragem não-linear. Em especial, deseja-se estudar o método da Cadeia de Markov Aproximada (CMA) quando somente uma malha local é gerada. O método CMA é um método baseado na discretização da dinâmica do modelo considerado, gerando uma cadeia de Markov a tempo discreto. Este problema discretizado possui solução exata, que pode ser computada através de cálculos finitos. E por fim, compará-lo com um método muito utilizado, o Filtro de Partículas (FP).
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-content">
                            <h3>
                                Solução Numérica de Equações Diferenciais
                            </h3>
                            <p>
                            <h4><b>Aluno:</b></h4>Yuri Ramos Corrêa<br/>
                            <h4><b>Orientador: </b></h4>Prof. Iury Higor Aguiar da Igreja (DCC)<br/>
                            <br/>
                            Descrição: Diversos problemas da área das ciências e engenharias são modelados por equações diferenciais. Assim, é necessário conhecer soluções numéricas para essas equações, ou seja, soluções computacionalmente calculáveis que aproximem a solução exata para estes problemas, para que o estudo destas questões seja aprofundado. Pretende-se estudar as Soluções Numéricas de Equações diferenciais, de modo a gerar embasamento teórico para utilização futura no desenvolvimento de novos projetos
                            </p>
                        </div>
                    </div>
                </div>
            </details>
            

        </div>
        
    )
}

export default ProjetosExtensao
