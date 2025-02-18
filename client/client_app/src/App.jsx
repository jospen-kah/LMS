import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Courses from "./components/courses";
import WebsiteLayout from "./components/layout";
import About from "./pages/About";
import CourseDetails from './pages/CourseDetails';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portal from './pages/Portal';
import Register from "./pages/Registration";
import { AuthProvider } from './components/Auth';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import Profile from './pages/profile';



const App = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<WebsiteLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/courses/:id" element={<CourseDetails />} />
                        <Route path="/portal/:id" element={<Portal />} />

                    </Route>

                    <Route element={<DashboardLayout />}>
                        <Route path="/dashboard/:courseId" element={<Dashboard />} />
                        <Route path="/dashboard/user/profile" element={<Profile />} />
                    </Route>

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
