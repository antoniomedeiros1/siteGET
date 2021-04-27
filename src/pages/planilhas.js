import '../components/Main.css'
import Collapsible from 'react-collapsible';

import Header from "../components/Header"
import SiteFooter from "../components/SiteFooter"

const planilhas = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                        Planilhas Digitais
                    </div>
                    <div className="paragrafo">
                        O conhecimento de como criar planilhas eficientes e responsivas 
                        se tornou um pré-requisito para muitas oportunidades de emprego. 
                        Além disso, também é uma ótima forma de organizar as nossas finanças 
                        pessoais, aumentar a produtividade da sua empresa etc. Pensando nisso, 
                        o GET oferece um minicurso sobre o básico para criação de planilhas 
                        no Google Sheets
                    </div>
                </div>
                <Collapsible trigger="Aula #01 - Conceitos Básicos" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/lajZX8aQ8ZM" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #02 - Tabelas, Validação, Classificação e Filtro de dados" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/U-k4hKiDnBE" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #03 - Fórmulas/Funções" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/0hUG69yPm7M" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #04 - Formatação Condicional e Gráficos" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/JYQmg2_-84s" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
            </div>
            <SiteFooter />
        </div>
    )
}

export default planilhas
