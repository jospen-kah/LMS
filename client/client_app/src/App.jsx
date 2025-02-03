import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Community from "./pages/community";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import WebsiteLayout from "./components/layout";
import Footer from "./components/Footer";
import Courses from "./components/courses";
import Portal from './pages/Portal';
import CourseList from './pages/CourseDetails';




// Website layout with Navbar
const App = () => {
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
          <Route path="/course/:id" element={<CourseDetails />} />
        </Route>

        
        

        
        <Route path="/portal" element={<Portal />} />
        


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}



export default App;



