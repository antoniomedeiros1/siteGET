import { Link } from 'react-router-dom'
import '../components/Main.css'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'

const contato = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <div className="title1">
                    Fale conosco
                </div>
                
                <form action="https://formsubmit.co/joaossmauricio@gmail.com" method="POST">
                    <div class="form-div">
                        <label for="nome">Nome: </label>
                        <input type="text" name="Nome" id="nome" placeholder="Digite aqui..." required></input>
                    </div>

                    <div class="form-div">
                        <label for="sobrenome">Sobrenome: </label>
                        <input type="text" name="Sobrenome" id="sobrenome" placeholder="Digite aqui..."></input>
                    </div>

                    <div class="form-div">
                        <label for="email">Email: </label>
                        <input type="text" name="Email" id="email" placeholder="Digite aqui..." required></input>
                    </div>
                    
                    <div class="form-div">
                        <label for="assunto">Assunto: </label>
                        <input type="text" name="Assunto" id="assunto" placeholder="Digite aqui..." required></input>
                    </div>
                
                    <div class="form-div">
                        <label for="mensagem">Mensagem: </label>
                        <textarea name="Mensagem" rows="10" id="mensagem" placeholder="Digite aqui..." required></textarea>
                    </div>                    

                    <button class="form-submit" type="submit">Enviar</button>
                    
                </form> 
            </div>
            <SiteFooter />
        </div>
    )
}

export default contato
