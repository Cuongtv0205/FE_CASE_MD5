import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {
    const username = localStorage.getItem("username")
    let navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="">Logo</Link>
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
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <Link className="nav-link" to={`${username}`}>{username}<span
                                    className="sr-only">(current)</span></Link>
                                <button className="ml-3 btn btn-outline-success my-2 my-sm-0" onClick={() => {
                                    logout()
                                }}
                                        type="submit">Logout
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}