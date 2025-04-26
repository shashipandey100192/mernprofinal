import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";


function Welcomepage() {
  return (
        <div className='container mt-5'>
            
            <div className='row'>
                <div className='col-12 text-center p-3'>
                    <h2>select your login type</h2>
                </div>
                <div className='col-md-4 text-center'>
                    <Link to="employee">
                        <div className='card border shadow p-3'>
                        <h1><FaUser/></h1>
                        <h4>Employee</h4>
                        </div>
                    </Link>

                </div>
                <div className='col-md-4 text-center'>
                    <Link to="">
                        <div className='card border shadow p-3'>
                        <h1><FaUser/></h1>
                        <h4>Admin</h4>
                        </div>
                    </Link>

                </div>
                <div className='col-md-4 text-center'>
                    <Link to="">
                        <div className='card border shadow p-3'>
                        <h1><FaUser/></h1>
                        <h4>Supper Admin</h4>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
  )
}

export default Welcomepage