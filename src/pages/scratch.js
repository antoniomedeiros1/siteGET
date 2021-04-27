import '../components/Main.css'
import Collapsible from 'react-collapsible';

import Header from "../components/Header"
import SiteFooter from "../components/SiteFooter"

const scratch = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="text">
                    <div className="title1">Curso de Scratch</div>
                    <div className="paragrafo">
                        Com o objetivo de ensinar lógica de programação a um público que 
                        não conhece uma linguagem de programação previamente, com destaque 
                        para crianças na faixa etária de 8 a 16 anos. Foram gravados uma 
                        série de vídeos ensinando o uso da ferramenta Scratch, a qual 
                        utiliza programação em blocos, uma metodologia visualmente amigável 
                        que facilita a compreensão da lógica por detrás dela. <br/>
                        Este curso foi originado a partir de uma parceria com a Escola Municipal 
                        Oscar Schimidt em 2019 no projeto Cabeças Digitais.
                    </div>
                </div>
                <Collapsible trigger="Aula #01 - Introdução ao Scratch" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/yhj1BbxhVIo" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #02 - Lógica de Programação - Parte 1" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/rOokBumwHJ8" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #03 - Lógica de Programação - Parte 2" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/JtrpKosxOgw" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #04 - Lógica de Programação - Parte 3" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/mcseTLoyCA0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #05 - Projeto Interativo - Parte 1" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/blytwU00Q2Y" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #06 - Projeto Interativo - Parte 2" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/t_Bw4Ekc9-k" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #07 - Projeto Interativo - Parte 3" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/tlvYYdObVK8" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #08 - Mini Calculadora - Parte 1" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/oP9aowPZZeM" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #09 - Mini Calculadora - Parte 2" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "400px"
                            src="https://www.youtube.com/embed/LbPH1JlzqZQ" 
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

export default scratch
