import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector(state => {

    return state.user.user.user
})
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/home">Logo</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="add-blog">Add Blog<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item active">
                                    <Link className="dropdown-item" to={'/home/my-blogs'}> My Blogs</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <h3>{user.username}</h3>

                                    <button onClick={()=>{
                                        localStorage.clear()
                                        navigate('/')
                                    }} className="ml-3 btn btn-outline-success my-2 my-sm-0" type="submit">Logout
                                    </button>

                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}