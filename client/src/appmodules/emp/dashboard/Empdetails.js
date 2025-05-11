import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Empdetails() {
    const {id} = useParams();
     const [singleemp, singleemppage] = useState({})

  const Myaxiosfunc = async () => {
    await axios.get(`http://localhost:5700/singleemp/${id}`).then((d) => {
      console.log(d.data);
      singleemppage(d.data);
      
    })
  };

  useEffect(() => {
    Myaxiosfunc();
  }, [])

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <h3>user profile pic</h3>
            </div>
            <div className='col-md-9'>
                <h3>Employee Details Page</h3>
                <hr/>
                <h3>Employee Name: {singleemp.fullname}</h3>
                 <h3>Employee Id: {singleemp._id}</h3>
                <h4>Employee Email Id: {singleemp.email}</h4>
                 <h4>Employee Gender: {singleemp.gender}</h4>
                  <h4>Employee Role: {singleemp.role}</h4>
            </div>

        </div>
    </div>

  )
}

export default Empdetails