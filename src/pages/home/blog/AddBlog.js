import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addBlogs} from "../../../service/blogServices";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
export default function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => {
        return state.user.user.user
    })


    const [submitting, setSubmitting] = useState(false)
    const handleAddBlog = (values) => {
        let data = {...values,userid:user.id,image:img}
        console.log('add data: ',data)
        dispatch(addBlogs(data))
        navigate('/home')

    }
    const [imageUrls, setImageUrls] = useState([]);
    const [img, setImg] = useState("");
    const imagesListRef = ref(storage, "images/");
    const uploadFile = (imageUpload) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImg(url)
                setSubmitting(false)
            });
        })

    };
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev,url]);
                });
            });
        });
    }, []);
    return (

        <>

            <div className="row">
                <div className="col-12">
                    <h1 style={{textAlign:'center'}}>AddBlog</h1>
                    <Formik initialValues={{title: '', description: '',image:imageUrls}} onSubmit={(values) => {
                        console.log('aaaaaa',imageUrls);
                        handleAddBlog(values)
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <Field type="text" className={'form-control'} name ={'title'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Image</label>
                                <input type={'file'} onChange={(event)=>{
                                    console.log(event)
                                    setSubmitting(true)
                                    uploadFile(event.target.files[0])
                                }}/>
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    <Field as="select" name="status">*/}
                            {/*        <option disabled value="">ReadOnly</option>*/}
                            {/*        <option value='1'>Public</option>*/}
                            {/*        <option value='2'>Private</option>*/}
                            {/*    </Field>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Description</label>
                                <Field type="text" className={'form-control'} name = {'description'}/>
                            </div>
                            <div>
                                <button type="submit" disabled={submitting} className="ml-2 btn btn-primary">Save</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )

}









