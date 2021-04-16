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
                        <li>
                            <a href="mailto:get.engcomputacional@engenharia.ufjf.br">
                            <img src={Mail} alt="mail" className="icon"></img>get.engcomputacional@engenharia.ufjf.br
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com.br/maps/place/GET+Engenharia+Computacional+-+UFJF/@-21.7760943,-43.3745159,17z/data=!3m1!4b1!4m5!3m4!1s0x989ba19a60adb9:0x7a2ead724f5e3cf7!8m2!3d-21.7760702!4d-43.3724335" target="_blank">                            
                                <img src={Local} alt="local" className="icon"></img> 
                                UFJF Prédio Eng. Computacional/DCC/Estatística 2º Andar
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="cent">
                    <img src={Logo} alt="logo" className="logo"></img>
                </div>
                <div className="dir">
                    <ul>
                        <li><a href="https://www.instagram.com/get.engcomp/" target="_blank">
                            <img src={Insta} className="big-icon"></img>    
                        </a></li>
                        <li><a href="https://www.youtube.com/channel/UCzgvhQpo6-WMS4CMP8qlhjQ" target="_blank">
                            <img src={Youtube} className="big-icon"></img>    
                        </a></li>
                    </ul>                
                </div>              
            </div>
            
        </div>
    )
}

export default SiteFooter;
