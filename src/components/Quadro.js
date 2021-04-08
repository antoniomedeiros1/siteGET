import Carousel from 'react-bootstrap/Carousel'

import aprovados from '../img/aprovados.png'
import fazer from '../img/oquefz.png'
import vanta from '../img/vanta.png'

const Banner = () => {
    return (
        <Carousel style={{'width':"400px", 'height':"400px",'marginLeft':"auto", 'marginRight':"auto"}}>
            <Carousel.Item style={{'height':"400px"}}>
                <img
                    className="d-block w-100"
                    src={fazer}
                    alt="Process-Seletivo"
                ></img>
            </Carousel.Item>
            <Carousel.Item style={{'height':"400px"}}>
                <img
                    className="d-block w-100"
                    src={aprovados}
                    alt="Process-Seletivo"
                ></img>
            </Carousel.Item>
            <Carousel.Item style={{'height':"400px"}}>
                <img
                    className="d-block w-100"
                    src={vanta}
                    alt="Process-Seletivo"
                ></img>
            </Carousel.Item>
        </Carousel>
        
    )
}

export default Banner