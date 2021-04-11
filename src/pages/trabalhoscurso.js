import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

const about = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                        Prêmio Capes de Tese 2015 <br /> Prof. Bernardo Martins Rocha
                    </div>
                    <div className="paragrafo">
                        texto
                    </div>
                    <div className="paragrafo">
                        mais texto
                    </div>
                    <div className="paragrafo">
                        Se possível algumas palavras dele
                    </div>


                    <div className="title1">
                        Prêmio Endeavour Research Leadership (2019) <br /> Prof. Rodrigo Weber
                    </div>
                    <div className="paragrafo">
                        texto
                    </div>
                    <div className="paragrafo">
                        mais texto
                    </div>
                    <div className="paragrafo">
                        Se possível algumas palavras dele
                    </div>

                    <div className="title1">
                       Algum trabalho de Egresso que teve relevância talvez ?
                    </div>
                    <div className="paragrafo">
                        texto
                    </div>
                    <div className="paragrafo">
                        mais texto
                    </div>
                    <div className="paragrafo">
                        Se possível algumas palavras dele
                    </div>

                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default about
