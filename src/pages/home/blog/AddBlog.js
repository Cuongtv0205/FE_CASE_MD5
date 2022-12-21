import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addBlogs} from "../../../service/blogServices";

export default function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => {
        console.log(state)
        return state.user.user.user
    })
    const handleAddBlog = (values) => {
        let data = {...values,user:{id:user.id}}
        console.log(data)

    }
    return (

        <>
            <div className="row">
                <div className="col-12">
                    <h1 style={{textAlign:'center'}}>AddBlog</h1>
                    <Formik initialValues={{title: '', image: '', description: ''}} onSubmit={(values) => {
                        handleAddBlog(values)
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <Field type="text" className={'form-control'} name ={'title'}/>
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="exampleInputEmail1">Image</label>*/}
                            {/*    <Field type="file" className={'form-control'} name = {'image'}/>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Description</label>
                                <Field type="text" className={'form-control'} name = {'description'}/>
                            </div>
                            <div>
                                <button type="submit" className="ml-2 btn btn-primary">Save</button>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div>

        </>
    )

}









