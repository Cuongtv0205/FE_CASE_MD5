import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../service/userService";
import {Field, Form, Formik} from "formik";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (values) => {
        dispatch(login(values)).then((data) => {
            if (!data.payload.token) {
                alert("sai tk mk")
                navigate("/login")
            } else {
                localStorage.setItem('token', data.payload.token)
                localStorage.setItem('id', data.payload.user.id)
                localStorage.setItem('username', data.payload.user.username)
                console.log(typeof data.payload.user.id)
                if (data.payload.user.id === 1 && data.payload.user.username === 'admin') {
                    navigate('/admin')
                } else {
                    navigate("/")
                }
            }
        })
    }
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <Formik initialValues={{
                        username: '', password: ''
                    }} onSubmit={(values, {resetForm}) => {
                        handleLogin(values)
                        resetForm()
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address/UserName</label>
                                <Field type="text" className={'form-control'} name={'username'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <Field type="text" className={'form-control'} name={'password'}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" onClick={() => {
                                navigate('/register')
                            }} className="btn btn-secondary">Register
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}