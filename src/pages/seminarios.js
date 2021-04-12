import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

const seminarios = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <iframe
                    style={{display: "block", margin: "auto"}}
                    width="853" 
                    height="505" 
                    src="https://www.youtube.com/embed/videoseries?list=PLUnuB1luF8VZ7CaNsFMx-kMTt17N3xctS" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen="true">
                </iframe>
                <div className="text">
                    <div className="title1">
                        Seminários
                    </div>
                    <div className="paragrafo">
                        A atividade consiste em seminários para a divulgação
                        de pesquisas realizadas - finalizadas ou em desenvolvimento -
                        por professores atuantes na área de Engenharia Computacional.
                        São agendadas datas para que os convidados interessados possam
                        realizar apresentações de sua participação em pesquisas na UFJF.
                    </div>
                    <div className="title1">
                        Durante a pandemia
                    </div>
                    <div className="paragrafo">
                        Atualmente ocorrem em forma de transmissões ao vivo, via YouTube,
                        sendo as mesmas abertas à toda a comunidade acadêmica. Ao final
                        de cada apresentação há um momento para questionamentos e
                        sugestões de ideias na seção de comentários da plataforma.
                    </div>
                    <div className="title1">
                        Importância
                    </div>
                    <div className="paragrafo">
                        Os seminários permitem aos participantes conhecer aplicações
                        e metodologias ensinadas no curso de Engenharia Computacional,
                        ilustrando a importância da multidisciplinaridade em temas atuais,
                        que é um aspecto valorizado ao longo do curso.
                    </div>
                    <div className="title1">
                        Seminários 2021
                    </div>
                    <div className="paragrafo">
                        Em Breve
                    </div>
                    <div className="title1">
                        Seminários 2020
                    </div>
                    <div className="paragrafo">
                        <table>
                            <thead>
                                <tr>
                                    <th>Palestrante</th>
                                    <th></th>
                                    <th>Tema</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rodrigo Weber dos Santos</td>
                                    <td></td>
                                    <td>Engenharia computacional e o papel da modelagem da pandemia COVID-19 no Brasil</td>
                                </tr>
                                <tr>
                                    <td>Priscila Capriles</td>
                                    <td></td>
                                    <td>Mineração de dados em mídias sociais para o entendimento da pandemia de Sars-CoV-2</td>
                                </tr>
                                <tr>
                                    <td>Grigori Chapiro</td>
                                    <td></td>
                                    <td>Alguns tópicos da Modelagem Matemática</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default seminarios
