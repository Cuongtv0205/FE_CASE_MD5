import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListQuiz from "./pages/home/quizz/ListQuiz";
import AddQuiz from "./pages/home/quizz/AddQuiz";

function App() {
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''}element={<Login></Login>}/>
                    <Route path={'register'} element={<Register></Register>}/>
                    <Route path={'home'} element={<Home/>}>
                        <Route path={''} element={<ListQuiz/>}></Route>
                        <Route path={'add-quiz'} element={<AddQuiz/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
