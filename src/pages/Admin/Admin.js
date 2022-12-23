import Navbar from "../../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getUser} from "../../service/adminService";

export default function Admin() {
    const dispatch = useDispatch();
    const users = useSelector(state => {
        return state.admin.currentAdmin
    })
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (<>
        <div className="row">
            <div className="col-12">
                <Navbar/>
            </div>
        </div>
        <table className="table" style={{marginTop :90}}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">ID</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {users.map((item, index) => (
                <tr>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.id}</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={
                        () => handleDelete(item.id)
                    }>Cút
                    </button>
                </td>
            </tr>))}
            </tbody>
        </table>
    </>)
}