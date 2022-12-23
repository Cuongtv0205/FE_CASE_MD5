import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../service/blogServices";
import {Link} from "react-router-dom";
import {addLikes, deleteLikes, getLikes} from "../../../service/likeService";
import {getComment} from "../../../service/commentService";

export default function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {

        return state.blogs.blogs
    })
    const likes = useSelector(state => {
        return state.likes.currentLike
    })
    const comments = useSelector(state => {
        return state.comment
    })
    useEffect(() => {
        dispatch(getBlogs())
        dispatch(getLikes())
        dispatch(getComment())
    }, [])

    let showCommentByIdBlog = (idBlog) => {

    }

    let likeDistLike = (idUser, idBlog) => {
        let check = likes.filter((item) => {
            return item.blogId === +idBlog && item.userId === +idUser
        }).length
        console.log(check)
        let newLike = {
            blogId: +idBlog,
            userId: +idUser
        }
        if (check === 0) {
            return dispatch(addLikes(newLike))
        } else {
            return dispatch(deleteLikes(newLike))
        }
    }

    let getLikeByBlogId = (idBlog) => {
        let idUser = localStorage.getItem('id')
        let listLike = likes.filter((item) => {
            return item.blogId === idBlog
        })
        if (listLike.filter((item) => {
            return item.userId == idUser
        }).length === 0) {
            return (<div className="emotion row " onClick={() => likeDistLike(idUser, idBlog)}
                         style={{justifyContent: "center"}}>
                <i className='far fa-heart' style={{
                    fontSize: 16, marginTop: 6
                }}></i>
                <p style={{fontSize: 17, marginTop: 0, marginLeft: 10}}>{listLike.length}</p>
            </div>)
        } else {
            return (<div className="emotion row " onClick={() => likeDistLike(idUser, idBlog)}
                         style={{justifyContent: "center"}}>
                <i className='fas fa-heart' style={{
                    fontSize: 16, color: 'red', marginTop: 6
                }}></i>
                <p style={{fontSize: 17, marginTop: 0, marginLeft: 10}}>{listLike.length}</p>
            </div>)
        }
    }
    return (<>
        {blogs.map((item) => (<div className="row" style={{marginTop: '30px'}}>
            <div className="col-12">
                <div className="col-6 offset-3">
                    <div className="container-main">
                        {/*header*/}
                        <div className="main-header">
                            <div className="row offset-1">
                                <div>
                                    <Link to={`${item.userId}`}>
                                        <img
                                            src={item.avatar}
                                            alt="" className="avatar"/>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`${item.userId}`}>
                                        <h4 className="nick-name">{item.username} </h4>
                                    </Link>
                                    <div className="col-1"></div>
                                    <div className='time-post col-12'>
                                        <p>{item.createTime}</p>
                                    </div>
                                    <div className="col-1">
                                        <p><img src={item.image}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="title">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="content col-10">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                        {/*mid*/}
                        <div className="main-middle">
                            <div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                            src={item.image}
                                            alt="" className="main-image"/>
                                        <hr className={'main-line'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*bottom*/}
                        <div className="main-bottom">
                            <div className="row">
                                <div className="col-5 offset-1">
                                    {getLikeByBlogId(item.id)}
                                </div>
                                <div className="col-5">
                                    <div className="comment">
                                        <p style={{textAlign: 'center', fontSize: 17}}>Bình luận</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>))}
    </>)
}