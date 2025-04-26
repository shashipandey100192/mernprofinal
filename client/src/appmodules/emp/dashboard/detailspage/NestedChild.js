import React, { useState } from 'react'

function NestedChild(props) {
    const [data,setdata] = useState(props.list)

  


  return (
    <div className='p-3 bg-success mt-5'>
        
        <p>NestedChild</p>
        <p>datalist: {data}</p>

        <select className='form-select'>
                    {props.list.map((s)=>{
                        return(
                            <option>{s*3}</option>
                        )
                    })}
                  </select>

        </div>
  )
}

export default NestedChild