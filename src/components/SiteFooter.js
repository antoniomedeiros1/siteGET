import './SiteFooter.css';

import Mail from '../img/mail.png';
import Local from '../img/periscope.png';
import Logo from '../img/logo-get2.png'
import Insta from '../img/instagram.png'
import Youtube from '../img/youtube.png'

const SiteFooter = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="esq">
                    <ul>
                        <li><img src={Mail} alt="mail" className="icon"></img>get.engcomputacional@engenharia.ufjf.br</li>
                        <li>
                            <img src={Local} alt="local" className="icon"></img> 
                            UFJF Prédio Eng. Computacional/DCC/Estatística 2º Andar
                        </li>
                    </ul>
                </div>
                <div className="cent">
                    <img src={Logo} alt="logo" className="logo"></img>
                </div>
                <div className="dir">
                    <ul>
                        <li><a href="https://www.instagram.com/get.engcomp/">
                            <img src={Insta} className="big-icon"></img>    
                        </a></li>
                        <li><a href="https://www.youtube.com/channel/UCzgvhQpo6-WMS4CMP8qlhjQ">
                            <img src={Youtube} className="big-icon"></img>    
                        </a></li>
                    </ul>                
                </div>              
            </div>
            
        </div>
    )
}

export default SiteFooter;
