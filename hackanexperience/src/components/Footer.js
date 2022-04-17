import { Link } from "react-router-dom";

import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer_main">
            <Link to="/" className="footer_logo">
                HackAnExperience
            </Link>
            <div className="footer_center">
                <Link to="/">Acerca de</Link>
                <Link to="/">FAQ</Link>
            </div>
            <div className="footer_right">Logos RRSS</div>
        </footer>
    );
};

export default Footer;
