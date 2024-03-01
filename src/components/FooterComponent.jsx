import '../styles/footer.css'
import FB from '../assets/facebookLogo.jpg'
import X from '../assets/X.jpg'
import IG from '../assets/IG.jpg'
import AppStore from '../assets/downloadIOS.jpg'
import PlayStore from '../assets/downloadAndroid.png'

const Footer = () => {
    return (
        <div>

<footer className="footer">
        <div className="footer-container">
            <div className="footer-contents">
                <div className='footer-about'>
                    <h3>McDonald's</h3>
                    <p>Tentang Kami</p>
                    <p>News Room</p>
                    <p>Karier</p>
                </div>
                <div className='footer-contacts'>
                    <h3>Hubungi Kami</h3>
                    <img src={FB}/>
                    <img src={X}/>
                    <img src={IG}/>
                </div>
                <div className='footer-install'>
                    <h3>Install our App</h3>
                    <img src={AppStore}/>
                    <img src={PlayStore}/>
                </div>
            </div>
        </div>
    </footer>

        </div>
    );
}

export default Footer;