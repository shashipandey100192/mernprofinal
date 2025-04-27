import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import {toast,ToastContainer} from "react-toastify";
import axios from 'axios';

function Empregistor() {
    const xyz = useNavigate();
    
    const {register,handleSubmit,formState: { errors }} = useForm()

const mysubmit = async(e)=>{
    const mydata = await axios.post('http://localhost:5700/addemp',e).then((d)=>{
        console.log(d);
    })
    toast.success("data successfully submited",{position: "top-left",autoClose: 2000,theme: "dark"});
    setTimeout(()=>{
        xyz("/employee");
    },2000);

}



    return (
        <form onSubmit={handleSubmit(mysubmit)}>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 border shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 mb-5 text-center'>
                                <p className='h4'>Employee Registor Page</p>
                                <ToastContainer></ToastContainer>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder='enter email id' name='email' {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'> email id is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='enter full Name' name='fullname' {...register("fullname",{required:true,minLength:4,maxLength:10})}/>
                                    {/* {errors.fullname && <p className='text-danger'>full name is required</p>} */}
                                    {errors.fullname?.type==='required' && <p className='text-danger'>full name is required</p>}
                                    {errors.fullname?.type==='minLength' && <p className='text-warning'>to small name</p>}
                                    {errors.fullname?.type==='maxLength' && <p className='text-success'>to strong name</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phono No</label>
                                    <input type="text" className="form-control" placeholder='enter phone' name='phone' {...register("phone")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="male" {...register("gender")}/>
                                        <label className="form-check-label">Male</label>0
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="female" {...register("gender")}/>
                                        <label className="form-check-label" >Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <select className='form-select' name='role' {...register("role")}>
                                        <option hidden>Select Role type</option>
                                        <option>Employee</option>
                                        <option>Admin</option>
                                        <option>Supper_Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder='enter password' name='pass' {...register("pass")}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <input type='submit' value="Registor Now" className='btn btn-success' />
                                   
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

export default Empregistor