import '../components/Main.css'
import '../components/Card.css'

import Dealii from '../img/dealii.png'
import Vacina from '../img/vacina.jfif'
import Ossos from '../img/ossos.jfif'
import Sus from '../img/sus.png'
import Tosse from '../img/tosse.jfif'
import Ondas from '../img/ondas.jfif'
import Zambeze from '../img/zambeze.jpg'

const ProjetosExtensao = () => {
    return (
        <div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Uso da biblioteca deal.II para a simulação de problemas da mecânica dos fluidos empregando métodos de elementos finitos
                    </h3>
                    <p>
                        <h4><b>Aluno:</b></h4>Alexandre Vitor Silva Braga<br />
                        <h4><b>Orientador: </b></h4>Prof. Iury Higor Aguiar da Igreja (DCC)<br />
                        <br />
                    Descrição: O presente projeto visa o estudo numérico e computacional de formulações de elementos finitos mistos e híbridos para a resolução de problemas da mecânica dos fluidos utilizando a biblioteca deal.II. Em particular, pretende-se desenvolver um ferramental numérico/computacional capaz de gerar soluções aproximadas utilizando diferentes abordagens para os métodos de elementos finitos, como: contínuo, descontínuo e híbrido, incluindo estabilizações clássicas para estes métodos, com o intuito de realizar a simulação de problemas em regime predominantemente convectivos.
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Dealii} alt="dealii"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Modelagem matemática para a vacina do SARS-CoV-2
                    </h3>
                    <p>
                        <h4><b>Aluno:</b></h4>Ana Carolina Guedes de Oliveira Vieira<br />
                        <h4><b>Orientador: </b></h4>Prof. Marcelo Lobosco (DCC)<br />
                        <br />
                    Descrição: Durante o ano de 2020, vários cientistas em todo o mundo trabalharam para desenvolver vacinas que conseguissem conter o vírus que se alastrava pelo mundo. Após muitos meses de testes, vários laboratórios conseguiram desenvolver vacinas com estatísticas favoráveis ao combate do vírus. Atualmente, o Brasil conta com duas vacinas aprovadas para o uso emergencial, uma desenvolvida pela Sinovac na China em parceria com o Instituto Butantan no Brasil e a vacina de Oxford/AstraZeneca em parceria com a FioCruz. A pesquisa visa investigar a resposta imune contra a vacina da COVID-19, para tentar responder perguntas em aberto na literatura, como: qual a dose que induz maior produção de anticorpos ? Qual o intervalo ideal entre as doses?
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Vacina} alt="vacina"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Métodos Numéricos para Modelagem Acústica Bidimensional
                    </h3>
                    <p>
                        <h4><b>Aluno:</b></h4>Antonio José de Medeiros Filho<br />
                        <h4><b>Orientador: </b></h4> Prof. Elson Magalhães Toledo (MAC)<br />
                        <br />
                        Descrição: A equação da onda é uma equação diferencial parcial de segunda ordem. Possui aplicações como simulações computacionais de propagação de ondas sísmicas, desde que as condições do modelo sejam conhecidas. Implementá-las requer conhecimento de métodos numéricos que resolvam a equação, como o Método das Diferenças Finitas (MDF). Conhecer os limites dos valores dos parâmetros da implementação é essencial para evitar a dispersão numérica. Saber lidar com as condições de contorno do modelo é necessário para evitar reflexão nas bordas, que acabam por interferir no resultado final, impedindo uma visualização próxima do que acontece no mundo real.
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Ondas} alt="ondas"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Modelos de aprendizado profundo com transferência de aprendizagem para modelagem hidrológica
                    </h3>
                    <p>
                    <h4><b>Aluno:</b></h4>Caio Cedrola Rocha<br/>
                    <h4><b>Orientador: </b></h4>Prof. Leonardo Goliatt da Fonseca (MAC)<br/>
                    <br/>
                    Descrição: As bacias hidrográficas são áreas de escoamento que englobam um rio principal e seus afluentes. A previsão da vazão da água nessas bacias é essencial para a melhoria da gestão dos recursos hídricos e para a preservação ambiental, pois viabiliza tomadas de decisões e o planejamento de risco de longo prazo por órgãos competentes. O regime de vazão nos rios, contudo, está sujeito a diversas condicionantes, como fenômenos naturais e antrópicos, que afetam o nível, a vazão, a qualidade da água e o transporte de sedimentos. Além disso, as séries temporais de dados hidrológicos coletados podem apresentar variações de medições e espaços faltantes. Os modelos de aprendizado profundo <i>(deep learning)</i>, como os algoritmos <i>Long Short Term Memory</i> (LSTM) e <i>Multi Task Learning</i> (MTL), podem ser aplicados à previsão das séries hídricas; e, quando combinados, são robustos aos dados faltantes e apresentam melhor desempenho, na medida em que permitem o aprendizado de várias tarefas relacionadas, como a previsão da vazão em diferentes cursos d'água dentro da bacia hidrográfica. Outra estratégia possível é a utilização em conjunto com as Redes Neurais Convolucionais (CNN), na qual as séries temporais são codificadas como imagens e posteriormente analisadas. Desta forma, utilizando dados hidrológicos das bacias dos rios Paraíba do Sul (Brasil) e Zambeze (Moçambique), tem-se como objetivo criar modelos que prevejam bem as séries temporais apresentadas, e que possam ajudar na gestão hídrica e no desenvolvimento sustentável das regiões das bacias. 
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Zambeze} alt="vacina"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Modelagem Computacional no Estudo da Biomecânica Articular
                    </h3>
                    <p>
                        <h4><b>Aluno:</b></h4>Daniel Souza Ferreira<br />
                        <h4><b>Orientador: </b></h4>Profa. Flávia de Souza Bastos (MAC)<br />
                        <br />
                    Descrição: A artrose, ou artrite degenerativa, é uma doença crônica comum entre indivíduos com mais de 60 anos que apresenta como um de seus principais sintomas a dor ao movimentar-se. Esta forma da doença degenera a cartilagem articular e causa hipertrofia nos ossos sendo as articulações mais acometidas as do joelho, coluna espinhal e as articulações coxofemorais. Uma opção realizada com a finalidade de prevenir e corrigir a artrite degenerativa é o procedimento cirúrgico denominado osteotomia periacetabular. Como o nome sugere, o procedimento tem o objetivo de mudar a biomecânica patológica do quadril  através de uma remodelação cirúrgica do cíngulo pélvico, fixando o acetábulo em uma angulação ou posição diferente, a qual é mais favorável à estabilidade articular. Tal procedimento pode melhorar a qualidade de vida de pessoas portadoras de artrose total do quadril incapacitante. Tendo em vista a complexidade apresentada tanto pela curva de aprendizado quanto pela realização do procedimento cirúrgico acima citado, é interessante o uso de ferramentas e modelos computacionais a fim de auxiliar o cirurgião na realização da mesma e consequentemente na obtenção de melhores resultados.
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Ossos} alt="ossos"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Estudo e implementação de técnicas de inteligência computacional para análise de dados de pacientes do SUS no contexto da doença renal crônica
                    </h3>
                    <p>
                        <h4><b>Aluno:</b></h4>Gabriele Cesar Iwashima<br />
                        <h4><b>Orientador: </b></h4>Prof. Priscila Vanessa Zabala Capriles Goliatt (DCC)<br />
                        <br />
                    Descrição:  A doença renal crônica (DRC) é um problema de saúde mundial, por ser uma doença silenciosa e de difícil diagnóstico que, se não for tratada precocemente, pode levar à morte. No Sistema Único de Saúde (SUS), os pacientes recebem atendimento em três níveis diferentes e sequenciais: primário, secundário e terciário. Cada nível possui uma abordagem única, tanto no tocante aos exames e aos procedimentos adotados, quanto à aparelhagem tecnológica e à qualificação dos profissionais. Portanto, gerir os recursos financeiros públicos da área de saúde, que costumam ser escassos, se constitui como um fator determinante no sucesso da gestão da saúde pública. A análise de grandes volumes de dados de saúde pública tem se tornado uma área estratégica de pesquisa devido à demanda crescente por maior transparência dos gastos públicos e por maior eficiência no funcionamento do SUS. Na cidade de Juiz de Fora, os pacientes diagnosticados, no nível secundário, como doentes renais crônicos, vêm sendo tratados pela Fundação Imepen, a qual possui um banco de dados com as informações e dados de milhares de pacientes.
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Sus} alt="sus"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(4, 122, 0)", color:"rgb(4, 122, 0)"}}>
                <div className="card-content">
                    <h3>
                        Detecção da COVID-19 através de gravações de som de tosse
                    </h3>
                    <p>
                        <h4><b>Aluno:</b></h4>Lucas Augusto Müller de Souza<br />
                        <h4><b>Orientadores: </b></h4>Heder Soares Bernardino (DCC), Alex Borges Vieira (DCC) e Jairo Francisco de Souza (DCC)<br />
                        <br />
                    Descrição: Este projeto visa a proposição e implementação de um método de ‘Deep Learning’ capaz de identificar pacientes infectados com a COVID-19, através de gravações de sons de tosses. Na literatura é possível encontrar diversos métodos de ‘Machine Learning’ que foram utilizados com sucesso na detecção de outras doenças através de gravações de tosses ou falas, tais como: Coqueluche, Asma, Parkinson, Alzheimer, Tuberculose, Esclerose Lateral Amiotrófica, entre outros. Neste trabalho iremos utilizar ‘datasets’ abertos coletados por outras instituições.
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Tosse} alt="tosse"></img>
                </div>
            </div>
        </div>
    )
}

export default ProjetosExtensao
