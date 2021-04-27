import '../components/Main.css'
import Collapsible from 'react-collapsible';

import Header from "../components/Header"
import SiteFooter from "../components/SiteFooter"

const linux = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                        Curso de Linux
                    </div>
                    <div className="paragrafo">
                        Essa série de vídeos visa ensinar mais sobre o sistema operacional Linux, 
                        suas diferentes distribuições e qual delas escolher. Você aprenderá a utilizar 
                        a interface Unix e alguns comandos básicos em bash, para que consiga utilizar 
                        o Linux no seu dia-a-dia
                    </div>
                </div>
                <Collapsible trigger="Aula #01 - Introdução ao Linux" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "450px"
                            src="https://www.youtube.com/embed/ZIhoOtYJ67I" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #02 - Instalação do Linux Mint" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "450px"
                            src="https://www.youtube.com/embed/QjJIerMdAow" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #03 - Interface Linux Mint" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "450px"
                            src="https://www.youtube.com/embed/tfPJjo7qkCs" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #04 - Máquinas Virtuais" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "450px"
                            src="https://www.youtube.com/embed/-0JRM1UT2Yk" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #05 - Comandos Básicos no Terminal" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "450px"
                            src="https://www.youtube.com/embed/ny3dkb1kRZQ" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #06 - Shell Script" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "450px"
                            src="https://www.youtube.com/embed/az2KGGJLw2M" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default linux
