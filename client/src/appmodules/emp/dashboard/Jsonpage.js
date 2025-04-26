import React, { useState } from 'react'
import axios from 'axios'

function Jsonpage() {

    const [myform,setmyform]=useState({
        fullname:"",
        email:""
    });


    const updateinput = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setmyform((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }

        const addItem = () => {
            axios.post("http://localhost:8800/user",myform).then((b)=>{
                console.log(b)
            });
        };
        
    
    return (
        <div className='container p-3 bg-light shadow mt-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">fullname</label>
                        <input type="text" className="form-control" placeholder='enter fullname' name='fullname'  value={myform.fullname} onInput={updateinput} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">email</label>
                        <input type="text" className="form-control" placeholder='enter email' name='email' value={myform.email} onInput={updateinput}/>
                    </div>
                </div>
                <div className='col-md-12 text-center'>
                    <div className="mb-3">
                       <button type='button' className='btn btn-success' onClick={addItem}> submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Jsonpage