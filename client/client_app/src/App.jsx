import { useEffect, useState } from 'react'
// 
// import axios from "axios"
function App() {


  const [coursesData, setCoursesData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/courses/")
      .then(response => response.json())
      .then(
        data => {
          setCoursesData(data)
          console.log("data",data)
          
        }
      )
  },[])


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
    <div>
      {
        coursesData.map( (data) => {
          return <>
          <h1> Course Name : {data.course_name}</h1>
          <h2> Course Code : {data.course_code}</h2>
          </>
          

        })
        }
    </div>
  )
}

export default App
