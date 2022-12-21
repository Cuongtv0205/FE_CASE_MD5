import Navbar from "../components/Navbar";
import {Outlet} from "react-router";
import Admin from "./Admin/Admin";

export default function Authorization() {
    let id = localStorage.getItem('id')
    if (id === '1') {
        return (<Admin/>)
    } else {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
        )
    }
}