// import { useEffect, useState } from 'react';
import './App.css';
import Registration from './components/Authentication/Registration';
import Login from './components/Authentication/Login';
import Home from './components/Home';
// import Community from './components/community';
// 
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import axios from "axios"
function App() {


  // const [coursesData, setCoursesData] = useState([{}])

  // useEffect(() => {
  //   fetch("http://localhost:5000/courses/")
  //     .then(response => response.json())
  //     .then(
  //       data => {
  //         setCoursesData(data)
  //         console.log("data", data)

  //       }
  //     )
  // }, [])


  // useEffect(()=> {
  //   const getdata = async() =>{
  //     try{

  //       const data = await axios.get("http://localhost:5000/courses/")
  //       console.log("data here", data)
  //       return data
  //     }catch(error){
  //       console.log(error)
  //     }

  //   }

  //   getdata()
  // },[])



  return (
    <BrowserRouter>
    <div className='app'>
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='login' element={<Login />} />
         </Routes>
      

      {/* {
        coursesData.map((data) => {
          return <>
            <h1> Course Name : {data.course_name}</h1>
            <h1> Course Code : {data.course_code}</h1>
          </>


        })
      } */}
    </div>
    </BrowserRouter>
  )
}

export default App
