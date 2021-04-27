import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import Membros from '../components/Membros';

const members = () => {
    return (
        <div>
            <Header />
            <div className="container-main">
                <Membros />
            </div>
            <SiteFooter />
        </div>
    )
}

export default members