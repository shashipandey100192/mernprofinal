import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Empdetailspage() {
  const [users, setusers] = useState([])

  const Myaxiosfunc = async () => {
    await axios.get('http://localhost:5700/allemp').then((d) => {
      console.log(d.data.data);
      setusers(d.data.data);
    })
  };

  useEffect(() => {
    Myaxiosfunc();
  }, [])

const myremove = async(id)=>{
  await axios.delete(`http://localhost:5700/singedataremove/${id}`).then((d) => {
    console.log(d);
    Myaxiosfunc();
  })
}


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 bg-warning p-5'>
          {/* <ul>
                {users.map((d)=>{
                    return <li>{d._id}</li>
                })}
              </ul> */}

          <table className='table '>
            <thead>
              <tr>
                <th>SNo</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {users.map((d,s)=>{
                    return(
                      <tr>
                <td>{++s}</td>
                <td>{d.fullname}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.gender}</td>
                <td>{d.role}</td>
                <td>
                  <Link to={`userdetails/`+d._id} class="badge btn cfs text-white bg-success"><MdRemoveRedEye /></Link>
                  <Link to={`useredit/`+d._id} class="badge btn cfs text-white bg-warning ms-1"><PiPencilSimpleLineFill /></Link>
                  <span class="badge btn cfs text-white bg-danger ms-1" onClick={()=>{myremove(d._id)}}><MdDelete /></span>
                </td>
              </tr>
                    )
                })}

              
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Empdetailspage