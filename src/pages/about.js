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
                        Sobre o GET Engenharia Computacional
                    </div>
                    <div className="paragrafo">
                        O GET Engenharia Computacional visa dar retorno à sociedade, à 
                        graduação e ao meio acadêmico. No âmbito da <Link to="/activities/extensao">extensão</Link>, o grupo 
                        realiza projetos que visam o ensino de meios tecnológicos para 
                        crianças/jovens de escolas públicas, a capacitação de professores 
                        do ensino básico em plataformas de mídias digitais e a divulgação da g
                        raduação de Engenharia Computacional. 
                    </div>
                    <div className="paragrafo">
                        Como algumas das <Link to="/activities/ensino">atividades de ensino do GET</Link>, 
                        temos a realização de diversos minicursos, aulas de revisão de 
                        conteúdo de matérias da graduação e projetos de acompanhamento 
                        de novos ingressantes no curso. Já no meio da <Link to="/activities/pesquisa">pesquisa</Link>, além de 
                        cada membro do grupo realizar a sua própria, o grupo organiza 
                        atividades de <Link to="/activities/seminarios">Seminários</Link> de 
                        pesquisas na área do curso e possuí alguns projetos que visam a inovação tecnológica.
                    </div>
                </div>
                <iframe
                    style={{display: "block", margin: "auto"}}
                    width="853" 
                    height="505" 
                    src="https://www.youtube.com/embed/KmOu3gS1ciY" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen="true"
                >
                </iframe>
                <div className="text">
                    <div className="title1">
                        Localização
                    </div>
                    <div className="paragrafo">
                        Prédio novo entre a Faculdade de Engenharia e o Instituto de 
                        Ciências Exatas – 2º andar, sala 7 <br/>
                        Endereço: Faculdade de Engenharia/Instituto de Ciências Exatas – UFJF <br/>
                        Rua José Lourenço Kelmer, s/n – Campus Universitário <br/>
                        Bairro São Pedro – CEP: 36036-330 – Juiz de Fora – MG 
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default about
