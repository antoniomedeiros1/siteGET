import '../components/Main.css'
import '../components/Card.css'

import Sheets from '../img/sheets.png'
import Python from '../img/python.png'
import Linux from '../img/linux.png'

const ProjetosExtensao = () => {
    return (
        <div>
            <div className='card' style={{borderLeftColor: "rgb(27, 136, 238)", color:"rgb(27, 136, 238)"}}>
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
            <div className='card' style={{borderLeftColor: "rgb(27, 136, 238)", color:"rgb(27, 136, 238)"}}>
                <div className="card-content">
                    <h3>
                        Python 🐍
                    </h3>
                    <p>
                        Nessa série de vídeos ensinamos a programar em Python utilizando o Google Colab, 
                        uma ferramenta gratuita  e online com as mesmas capacidades do Jupyter-notebook e 
                        mais algumas funcionalidades. Durante ela é ensinado o básico da sintaxe da 
                        linguagem, além das bibliotecas NumPy e Matplotlib. O GET também oferece o curso
                        de Python ao vivo em eventos
                    </p>
                </div>
                <div className="card-icon">
                    <img src={Python} alt="python"></img>
                </div>
            </div>
            <div className='card' style={{borderLeftColor: "rgb(27, 136, 238)", color:"rgb(27, 136, 238)"}}>
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
