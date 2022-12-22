import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../service/userService";

export default function Register() {
    let navigate = useNavigate()
    const dispatch = useDispatch();
    const handleRegister = (values) => {
        dispatch(register(values)).then((data) => {
            // console.log(data)
            if (data.payload.message) {
                alert("ten tk da trung")
            } else {
                alert("register ok")
                navigate('/login')
            }
        })
    }
    return (<>
        <div className="row">
            <div className="offset-3 col-6">
                <h1 style={{textAlign: 'center'}}>Register</h1>
                <Formik initialValues={{
                    username: '', password: ''
                }} onSubmit={(values, {resetForm}) => {
                    console.log(values)
                    if (values.username === '' || values.password === '') {
                        alert("ko dc de trong")
                    } else {
                        handleRegister(values)
                        resetForm()
                    }
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
                            navigate('/login')
                        }} className="btn btn-secondary">Login
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    </>)
}