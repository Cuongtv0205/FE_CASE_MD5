import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../service/blogServices";

export default function MyBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
            console.log(state)
            return state.blogs.blogs
        }
    )
    const user = useSelector(state => {
        console.log(state.user)
        return user.user.user.user
    })


    useEffect(() => {
        dispatch(getBlogs())
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1 style={{textAlign: 'center'}}>MyBlog</h1>
                    <table className="table table-striped">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            {/*<th scope="col">Status</th>*/}
                            <th scope="col">Description</th>
                            <th scope="col">IdUser</th>
                        </tr>

                        {blogs.map((item, index) => {
                            if (item.userId === user.id) {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.title}</td>
                                        {/*<td>{item.status}</td>*/}
                                        <td>{item.description}</td>
                                        <td>{item.userId}</td>
                                        <button>Delete</button>
                                    </tr>
                                )

                            }else return (<></>)
                        })}
                    </table>
                </div>
            </div>


        </>
    )

}