import React from 'react'
import NestedChild from './NestedChild'

function EmpBankdetails(props) {
    return (
  <div className='container bg-danger p-3'>
          <div className='row'>
              <div className='col-12'>
                  <h1>child {props.xyz}</h1>
                  <p>{props.employe_age}</p>
                  <select className='form-select'>
                    {props.employe_age.map((s)=>{
                        return(
                            <option>{s}</option>
                        )
                    })}
                  </select>
                  <button type='button' className='btn btn-success' onClick={props.message}>show notification</button>
                  <NestedChild list ={props.employe_age}></NestedChild>
              </div>
          </div>
      </div>
    )
}

export default EmpBankdetails