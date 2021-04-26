import '../components/Main.css'
import Collapsible from 'react-collapsible';

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
                <Collapsible trigger="Aula #01 - Introdução ao Python e ao Google Colab" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/VkgX8URhLTo" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #02 - Variáveis, Leitura e Impressão de dados" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/xtitk0FCYas" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #03 - Listas e Tuplas" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/Q6NxCYHHzs0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #04 - Listas Multidimensionais e Dicionários" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/3gfpxzn5nm0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #05 - Estruturas Condicionais" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/TRjeLNhgqCU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #06 - Estruturas de Repetição" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/ZzUNdXVxN4A" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #07 - Funções" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/vv_T8XRnFwU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #08 - Classes" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/AkVgTr78Tl4" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #09 - Introdução ao NumPy" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/JArdfH0AkWc" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </Collapsible>
                <Collapsible trigger="Aula #10 - Introdução ao Matplotlib" triggerTagName="div">
                    <div>
                        <iframe
                            style={{display: "block", margin: "auto"}}
                            width="80%" 
                            height= "500px"
                            src="https://www.youtube.com/embed/MV3K0pVxmG8" 
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

export default python
