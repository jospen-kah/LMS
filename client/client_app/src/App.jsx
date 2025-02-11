import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Courses from "./components/courses";
import WebsiteLayout from "./components/layout";
import ProtectedRoute from "./components/protect"; // Import ProtectedRoute
import About from "./pages/About";
import Community from "./pages/community";
import CourseDetails from './pages/CourseDetails';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portal from './pages/Portal';
import Register from "./pages/Registration";

const App = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<WebsiteLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/all-courses" element={<Courses />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/courses/:id" element={<CourseDetails />} />
                </Route>

                {/* PROTECTED ROUTE */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/portal" element={<Portal />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
