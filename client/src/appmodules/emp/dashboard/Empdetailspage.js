import React, { useEffect,useState } from 'react'
import axios from 'axios';

function Empdetailspage() {
    const [users, setusers] = useState([])

    const Myaxiosfunc = async() => {
       await axios.get('http://localhost:5700/about').then((d) => {
            console.log(d.data.data);
            setusers(d.data.data);
        })
    };

useEffect(()=>{
    Myaxiosfunc();
},[])

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 bg-warning p-5'>
              <ul>
                {users.map((d)=>{
                    return <li>{d._id}</li>
                })}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Empdetailspage