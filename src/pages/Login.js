import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 style={{textAlign:'center'}}>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address/UserName</label>
                            <input type="text" className={'form-control'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="text" className={'form-control'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="btn btn-secondary">
                            <Link to = {'register'} style = {{textDecoration:'none',color:'yellow'}}>Register</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}