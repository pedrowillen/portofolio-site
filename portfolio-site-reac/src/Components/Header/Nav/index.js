import { NavContent } from "./styles";
import logoImage from '../../../images/logo-80px.svg';

const Nav = () => {
    return (
        <NavContent>
            <h1>
                <a href="https://github.com/pedrowillen/portofolio-site">
                    <img src={logoImage} alt="Logo" />
                </a>
            </h1>
            <ul>
                <li>
                    <a href="https://github.com/pedrowillen/portofolio-site" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="https://github.com/pedrowillen/portofolio-site" className="nav-link">About</a>
                </li>
                <li>
                    <a href="https://github.com/pedrowillen/portofolio-site" className="nav-link">Skills</a>
                </li>
                <li>
                    <a href="https://github.com/pedrowillen/portofolio-site" className="nav-link">Services</a>
                </li>
                <li>
                    <a href="https://github.com/pedrowillen/portofolio-site" className="nav-link">Works</a>
                </li>
                <li>
                    <a href="https://github.com/pedrowillen/portofolio-site" className="contact">Contact</a>
                </li>
            </ul>
        </NavContent>
    );
}

export default Nav;