import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../service/blogServices";

export default function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state)
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
                            <th scope="col">Status</th>
                            <th scope="col">Description</th>
                            <th scope="col">UserId</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            blogs.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.status}</td>
                                    <td>{item.description}</td>
                                    <td>{item.userId}</td>
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