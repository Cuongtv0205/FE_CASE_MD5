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
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="">
                                {/*<img style={{width: 600, height: 600, objectFit: 'cover'}}></img>*/}
                            </div>
                        </div>
                        {
                            blogs.map((item, index) => {
                                    // if (item.status === 1) {
                                        return (
                                            <div className="col-xs-12 col-sm-6 col-md-4 imgCover">
                                                <tr>
                                                    <img src={item.image}
                                                         style={{width: 300, height: 300, objectFit: "cover"}}/>
                                                    <td>{item.title}</td>
                                                    {/*<td>{item.status}</td>*/}
                                                    <td>{item.description}</td>
                                                    {/*<td>{item.userId}</td>*/}
                                                </tr>
                                            </div>

                                        )

                                    // } else return <></>


                                }
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}