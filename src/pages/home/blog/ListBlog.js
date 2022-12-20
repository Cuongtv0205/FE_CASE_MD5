import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../service/blogServices";



export default function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {

            return state.blogs.blogs
        }
    )
    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            blogs.map((item,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                </div>
            </div>

        </>
    )
}