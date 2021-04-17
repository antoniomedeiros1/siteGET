import '../components/Main.css'
import '../components/Card.css'

import Sheets from '../img/sheets.png'
import Scratch from '../img/scratch.png'
import Linux from '../img/linux.png'

const ProjetosExtensao = () => {
    return (
        <div>
            <div className='card'
            data-aos="fade-left"
            style={{borderLeftColor: "rgb(27, 136, 238)", color:"rgb(27, 136, 238)"}}>
                <div className="card-content">
                    <h3>
                        Planilhas Digitais (Google Sheets) 📊
                    </h3>
                    <p>
                        O conhecimento de como criar planilhas eficientes e 
                        responsivas se tornou um pré-requisito para muitas oportunidades
                        de emprego. Além disso, também é uma ótima forma de organizar 
                        as nossas finanças pessoais, aumentar a produtividade da sua empresa
                        etc. Pensando nisso, o GET oferece um minicurso sobre o básico para
                        criação de planilhas no Google Sheets
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Sheets} alt="sheets"></img>
                </div>
            </div>
            <div className='card' 
            data-aos="fade-left"
            style={{borderLeftColor: "rgb(27, 136, 238)", color:"rgb(27, 136, 238)"}}>
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
                    <img src={Scratch} alt="scratch"></img>
                </div>
            </div>
            <div className='card' 
            data-aos="fade-left"
            style={{borderLeftColor: "rgb(27, 136, 238)", color:"rgb(27, 136, 238)"}}>
                <div className="card-content">
                    <h3>
                        Linux 🐧
                    </h3>
                    <p>
                    Essa série de vídeos visa ensinar mais sobre o sistema operacional Linux, 
                    suas diferentes distribuições e qual delas escolher. Você aprenderá a utilizar 
                    a interface Unix e alguns comandos básicos em bash, para que consiga utilizar 
                    o Linux no seu dia-a-dia
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Linux} alt="linux"></img>
                </div>
            </div>
        </div>
    )
}

export default ProjetosExtensao
