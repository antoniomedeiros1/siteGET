import {Link} from "react-router-dom";
import './Header.css' 
import logoget from '../img/logo-get.png'

const Header = ({ title }) => {
    return ( 
        <header className = 'header'>
            
            <div className = 'container'>
                <div className = 'logo'>
                    <img src={logoget} alt="Logo"></img>
                </div>
                <nav className = 'navbar'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li className='active'><Link to='/curso'>Engenharia Computacional</Link></li>
                        <li className='dropdown'><Link to='/activities'>Atividades</Link>
                            <ul className='dropcontent'>
                                <li className='.dropdown_item-1'><Link to='/activities/seminarios'>Seminários</Link></li>
                                <li className='.dropdown_item-2'><Link to='/activities/extensao'>Extensão</Link></li>
                                <li className='.dropdown_item-3'><Link to='/activities/pesquisa'>Pesquisa</Link></li>
                                <li className='.dropdown_item-4'><Link to='/activities/ensino'>Ensino</Link></li>
                            </ul>
                        </li>
                        <li className='dropdown'><Link to='/about'>Sobre o GET</Link>
                            <ul className='dropcontent'>
                                <li><Link to='/about/presentation'>Apresentação</Link></li>
                                <li><Link to='/about/members'>Membros</Link></li>
                                <li><Link to='/about/projects'>Projetos</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/tutorial'>Tutoriais</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                    </ul>    
                </nav>

            </div>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'GET Engenharia Computacional',
}

export default Header
