import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast,ToastContainer } from 'react-toastify';


function EmpLogin() {
    const nextpage = useNavigate();

const {register,handleSubmit,formState: { errors }} = useForm();


    const mylogin = (e)=>{
        console.log(e);
        localStorage.setItem("login_info",JSON.stringify(e));
        
        toast.success("successfullly login",{autoClose:2000});
        setTimeout(()=>{
            nextpage('/empmainpage');
        },2000)
       
    }


    return (
        <form onSubmit={handleSubmit(mylogin)}>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4 border shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 mb-5 text-center'>
                                <p className='h4'>Employee Login</p>
                                <ToastContainer></ToastContainer>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder='enter email id' name='email'  {...register("email",{required:true})} />
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder='enter password' name='pass'  {...register("pass",{required:true})}/>
                                    {errors.pass && <p className='text-danger'>password is required</p>}
                                
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                   <input type='submit' value="Login" className='btn btn-success'/>
                                   <Link to="registor" className='ms-5'>Registor Now</Link>
                                </div>
                            </div>
                        </div>                                                                                                                                                          
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default EmpLogin