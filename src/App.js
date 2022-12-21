
import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router";
import Register from "./pages/Register";
import Authorization from "./pages/Authorization";
import ListBlog from "./pages/home/blog/ListBlog";
import AddBlog from "./pages/home/blog/AddBlog";



function App() {

    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register></Register>}/>
                    <Route path={'/admin'} element={<Authorization/>}></Route>
                    <Route path={'/'} element={<Authorization/>}>
                        <Route path={''} element={<ListBlog/>}></Route>
                        <Route path={'add-blog'} element={<AddBlog/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
