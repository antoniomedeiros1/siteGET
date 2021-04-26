import { Link } from 'react-router-dom'
import '../components/Main.css'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

const contato = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="text">
                    <div className="title1">
                        Fale conosco
                    </div>
                    <div className="paragrafo">
                        Ainda resta alguma dúvida sobre o GET? Tem alguma ideia de parceria? Ou quer falar sobre algo mais específico? Pode mandar um email pra gente através desse formulário! 😁️
                    </div>

                    <form class="main-form" action="https://formsubmit.co/joaossmauricio@gmail.com" method="POST">
                        <div className="form-div ">
                            <div className="input-1">
                                <label for="nome">Nome: </label>
                                <input type="text" name="Nome" id="nome" placeholder="Digite aqui..." required></input>
                            </div>
                        </div>

                        <div className="form-div">
                            <div className="input-2">
                                <label for="sobrenome">Sobrenome: </label>
                                <input type="text" name="Sobrenome" id="sobrenome" placeholder="Digite aqui..."></input>
                            </div>
                        </div>

                        <div className="form-div">
                            <div className="input-3">
                                <label for="email">Email: </label>
                                <input type="text" name="Email" id="email" placeholder="Digite aqui..." required></input>
                            </div>
                        </div>

                        <div className="form-div">
                            <div className="input-4">
                                <label for="assunto">Assunto: </label>
                                <input type="text" name="Assunto" id="assunto" placeholder="Digite aqui..." required></input>
                            </div>
                        </div>

                        <div className="form-div">
                            <div className="input-5">
                                <label for="mensagem">Mensagem: </label>
                                <textarea name="Mensagem" rows="5" id="mensagem" placeholder="Digite aqui..." required></textarea>
                            </div>
                        </div>

                        <button className="form-submit" type="submit">Enviar</button>

                    </form>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default contato
