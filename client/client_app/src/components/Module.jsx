import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router';

function Module() {
    const [module, setModule] = useState([]);

    useEffect( ()=> {
        axios({
            method: 'get',
            url: 'http://localhost:5000/module',
            responsetype: 'application/json'
        })
        .then(response => {
            setModule(response.data);
            console.log("data",response.data)
            console.log("name: ", response.data.module_name)
        })
        .catch(error =>{
            console.error('There was an error fetching the modules', error)
        })
    }, [])

    
    
  return (
    <div>
      {module.map((item, index)=> (
        <div key={index} className="modules">
            {item.module_name}
        </div>
      ))}
    </div>
  )
}

export default Module
