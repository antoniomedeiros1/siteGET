import '../components/Main.css'
import {Link} from "react-router-dom";

import Header from "../components/Header"
import SiteFooter from "../components/SiteFooter"

const python = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                        Curso de Python
                    </div>
                    <div className="paragrafo">
                        Nessa série de vídeos ensinamos a programar em Python utilizando o Google Colab, 
                        uma ferramenta gratuita  e online com as mesmas capacidades do Jupyter-notebook e 
                        mais algumas funcionalidades. Durante ela é ensinado o básico da sintaxe da 
                        linguagem, além das bibliotecas NumPy e Matplotlib.
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default python
