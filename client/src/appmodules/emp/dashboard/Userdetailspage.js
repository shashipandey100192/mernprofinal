import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Userdetailspage() {
    const {id} = useParams();
    const [user, setuserdetails]=useState({})

    const Singleuserdata = () => {
        axios.get(`https://dummyjson.com/users/${id}`).then((d) => {
            console.log(d.data);
            setuserdetails(d.data);
        })
    };

    useEffect(() => {
        Singleuserdata();
    }, [])



  return (
    <div className='container'>
        <div className='row p-3 bg-dark'>
            <div className='col-12 g-0'>
                <Link to="/empmainpage/myaxios" className='btn btn-info text-white float-end'><IoArrowBackCircleSharp/>Back</Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4 border'>
                <img src={user.image} alt={user.firstName} />
            </div>
            <div className='col-md-8 border'>
                <p className='h2'>Id: {user.id}</p>
                <p className='h4'>Full Name: {user.firstName} {user.lastName}</p>
                <p>DOB: {user.birthDate}</p>
                <p>Email Id: {user.email}</p>
            </div>
        </div>
    </div>
  )
}

export default Userdetailspage