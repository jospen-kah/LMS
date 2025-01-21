import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Community from "./pages/community";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import WebsiteLayout from "./components/layout";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Leadership from "./pages/Leadership";
import Development from './pages/Development';
import Portal from './pages/Portal';
import Business from './pages/Business';
// import PrivateRoute from './pages/PrivateRoute';


// Website layout with Navbar
const App = () => {
  // const isAuthenticated = Boolean(localStorage.getItem('token'));
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-courses" element={<Courses />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/business-and-Entrepreneuship" element={<Business />} />
          <Route path="/personal-Development" element={<Development />} />
        </Route>

        
        

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
        


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}



export default App;



