import Carousel from 'react-bootstrap/Carousel'

import aprovados from '../img/aprovados.png'
import fazer from '../img/oquefz.png'
import vanta from '../img/vanta.png'

const Banner = () => {
    return (
        <Carousel style={{
                            'width':"100%", 
                            'height':"500px",
                            'marginLeft':"auto", 
                            'marginRight':"auto", 
                            "overflow":"hidden",
                            boxShadow: "1px 1px 3px #444"
                        }}>
            <Carousel.Item>
                <a href="https://www.instagram.com/p/CNDtDeHBWfq/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer"><img
                    className="d-block w-100"
                    src={aprovados}
                    alt="Insta1"
                    style={{height:"100%"}}
                ></img></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://www.instagram.com/p/CMaJmxYhhq1/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer"><img
                    className="d-block w-100"
                    src={vanta}
                    alt="Insta2"
                    style={{height:"100%"}}
                ></img></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://www.instagram.com/p/CMaJmxYhhq1/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer"><img
                    className="d-block w-100"
                    src={fazer}
                    alt="Insta3"
                    style={{height:"100%"}}
                ></img></a>
            </Carousel.Item>
        </Carousel>
        
    )
}

export default Banner