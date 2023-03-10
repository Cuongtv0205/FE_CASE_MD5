import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router";
import Register from "./pages/Register";
import Home from "./pages/User/home";
import ListBlog from "./pages/home/blog/ListBlog";
import AddBlog from "./pages/home/blog/AddBlog";
import Admin from "./pages/Admin/Admin";

function App() {
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register></Register>}/>
                    <Route path={'/admin'} element={<Admin/>}>
                    </Route>
                    <Route path={'/'} element={<Home/>}>
                        <Route path={''} element={<ListBlog/>}></Route>
                        <Route path={'add-blog'} element={<AddBlog/>}></Route>
                        <Route path={':username'} element={<AddBlog/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
