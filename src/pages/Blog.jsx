import Posts from '../componets/Posts';
import '../styles/style.css';

export default function Blog() {
    return (
        <div className="posts-container">
            <div className="cover-img">
                <div className="content-text">
                   <h1 className="thecolor-dark">Blog</h1>
                   <br />
                   <p>
                       Lorem ipsum dolor sit amet.
                   </p>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" 
                    alt="" 
                />
            </div>
            <br />
            <br />
            <br />
            <Posts />
            <br />
            <br />
        </div>
    )
}
