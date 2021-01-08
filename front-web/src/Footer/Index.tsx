import './styles.css';
import { ReactComponent as Instagram } from './Instagram.svg';
import { ReactComponent as Linkedin } from './Linkedin.svg';
import { ReactComponent as Youtube } from './Youtube.svg';



function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com.br" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com.br" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com.br">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;