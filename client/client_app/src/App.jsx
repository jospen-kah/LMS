import  {useEffect, useState}  from 'react'

function App(){

  const [backendData, setBackendData] = useState([{}])

  useEffect(()=> {
    fetch("/courses").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  })
  return (
    <div>

    </div>
  )
}

export default App
