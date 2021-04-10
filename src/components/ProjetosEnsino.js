import '../components/Main.css'
import '../components/Card.css'


import Algoritmos from '../img/algoritmos.png'
import Scratch from '../img/scratch.png'
import Calcnum from '../img/calcnum.png'
import Octave from '../img/octave.png'
import Python from '../img/numpython.png'

const ProjetosEnsino = () => {
    return (
        <div>
            <div className='card'>
                <div className="card-content">
                    <h3>
                        Aulão de Algoritmos 👩‍💻
                    </h3>
                    <p>
                        Algoritmos é uma disciplina que faz parte do ciclo
                        básico de todos os cursos de ciências exatas e
                        engenharias da UFJF. Tendo isso em vista, o GET oferece
                        aulões revisionais para poder auxiliar os alunos com o 
                        conteúdo da disciplina que envolve os conceitos básicos
                        de progamação como condições, repetições, funções e vetores
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Algoritmos} alt="algo"></img>
                </div>
            </div>

            <div className='card'>
                <div className="card-content">
                    <h3>
                        Aulão de Cálculo Numérico 📈
                    </h3>
                    <p>
                        A disciplina de Cálculo Numérico oferecida pela UFJF faz
                        parte de diversos cursos da computação, exatas e engenharia.
                        Por isso, o GET realiza aulões de revisão dos conteúdos (polinômios
                        de Taylor, interpolação polinomial, solução de sistemas lineares,
                        integração numérica, regressão linear)
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Calcnum} alt="algo"></img>
                </div>
            </div>
            
            <div className='card'>
                <div className="card-content">
                    <h3>
                        Scratch 🐯
                    </h3>
                    <p>
                    Com o objetivo de ensinar lógica de programação a um público que 
                    não conhece uma linguagem de programação previamente, com destaque 
                    para crianças na faixa etária de 8 a 16 anos. Foram gravados uma 
                    série de vídeos ensinando o uso da ferramenta Scratch, a qual 
                    utiliza programação em blocos, uma metodologia visualmente amigável 
                    que facilita a compreensão da lógica por detrás dela. <br/>
                    Este curso foi originado a partir de uma parceria com a Escola Municipal 
                    Oscar Schimidt em 2019 no projeto Cabeças Digitais.

                    </p>
                </div>
                <div className="card-icon">
                    <img src={Scratch} alt="algo"></img>
                </div>
            </div>

            <div className='card'>
                <div className="card-content">
                    <h3>
                        Curso de Octave ⚙️
                    </h3>
                    <p>
                        Octave é um software muito semelhante ao Matlab, suportando
                        a mesma linguagem, com a vantagem de ser gratuito e de código-aberto,
                        podendo ainda ser executado pelo terminal, apesar de possuir uma interface
                        gráfica própria. É uma ferramenta recorrente em algumas disciplinas e trabalhos 
                        do curso de Engenharia Computacional, por isso o GET preparou uma série de vídeos
                        ensinando como utilizar o programa
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Octave} alt="algo"></img>
                </div>
            </div>

            <div className='card'>
                <div className="card-content">
                    <h3>
                        Métodos Numéricos com Python 🐍
                    </h3>
                    <p>
                        Métodos numéricos são utilizados para resolver diversos
                        problemas de engenharia, matemática ou qualquer área que 
                        envolva modelagem por equações diferenciais
                            que não podem ser resolvidos analíticamente. Nesta
                        série de vídeos, preparamos alguns exemplos de aplicação
                        da linguagem Python na resolução desses problemas, utilizando
                        algumas bibliotecas muito importantes e demonstrando
                        os principais métodos utilizados para tal
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Python} alt="algo"></img>
                </div>
            </div>
        </div>
    )
}

export default ProjetosEnsino
