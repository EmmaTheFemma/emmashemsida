import '../styles/style.css';
import { Link } from 'react-router-dom';

export default function Posts() {
    return (
        <div>
            <h3>All posts</h3>
            <hr />
            <br />
            <ul className="grid-parent">
                <li className="card">
                    <Link className="link" to="singlepost">
                    <img 
                        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" 
                        alt="" 
                    />
                    <div>
                        <span className="cat-plant">Växter</span>
                        <h2>En test title som borde funka fint</h2>
                    </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
