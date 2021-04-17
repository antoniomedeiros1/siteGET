import Header from '../components/Header'
import Pilares from '../components/Pilares'
import SiteFooter from '../components/SiteFooter'
import Atividades from '../img/atividades.jpg'

const atividades = () => {
    return (
        <div>
            <Header />
            <div className='container-fluid' style={{ backgroundImage: `url(${Atividades})` }}>
                <div className='title'>
                    Atividades
                </div>
            </div>
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                        Atividades do GET EngComp
                    </div>
                    <div className="paragrafo">
                        O GET Engenharia Computacional desenvolve projetos com
                        o intuito de retribuir o conhecimento adquirido para a sociedade, a graduação e
                        o meio acadêmico. Dentre as atividades do GET podemos citar o ensino de tecnologias
                        para crianças e jovens de escolas públicas, capacitações profissionais,
                        minicursos ofertados em eventos e também no YouTube, além aulas de revisão 
                        (os famosos aulões) que atualmente ocorrem pelo Google Meet.
                    </div>
                    <div className="title1">
                        Tríade
                    </div>
                    <div className="paragrafo">
                        O GET possui três pilares que servem como base para
                        o desenvolvimento de todas as atividades. Esses pilares são
                        baseados na proposta das Universidades Públicas, que são:
                    </div>
                    <Pilares />
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default atividades
