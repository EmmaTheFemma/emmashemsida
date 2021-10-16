import '../styles/style.css';
import {Link} from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="container flex-spacebetween">
                <div className="logo">
                    <h2 className="thecolor">Emma</h2>
                </div>

                <ul className="nav">
                    <li>
                        <Link className="link" to="/">
                        Hem
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/blog">
                        Blog
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/aboutus">
                        Om Oss
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact">
                        Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="style-one" />
        </div>
    )
}
