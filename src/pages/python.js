import '../components/Main.css'
import {Link} from "react-router-dom";

import Header from "../components/Header"
import IntroPython from "../components/IntroPython"
import SiteFooter from "../components/SiteFooter"

const python = () => {
    return (
        <div>
            <Header />
            <IntroPython />
            <SiteFooter />
        </div>
    )
}

export default python
