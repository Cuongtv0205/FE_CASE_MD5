import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {
const dispatch = useDispatch();
const user = useSelector(state => {
    console.log(state)
    return state.user.user.user
})
    return (
        <>
            {/*<img src="https://anhdepbonphuong.com/wp-content/uploads/2016/02/tai-12-hinh-game-3D-dep-nhat-lam-hinh-nen-PC-dien-thoai-12.png" className="img-fluid" alt="..." style={{width:"100%",height:"50%"}}/>*/}
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
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <h3>{user.username}</h3>
                                <Link to={'/'}>
                                    <button className="ml-3 btn btn-outline-success my-2 my-sm-0" type="submit">Logout
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}