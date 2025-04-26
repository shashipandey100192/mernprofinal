import React from 'react'

function EmpHomepage() {
  const a = 900;
  const b = "firssdef";
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 p-5 bg-info'>
          {/* <h3>{a>=100 ? "greater number" : "less number"}</h3> */}
          {/* <h3>{a>=100 ? 500 : "not valid"}</h3> */}
          {/* <h3>{a>=100 ? <h2>this is true condition: {a}</h2> : "not valid"}</h3> */}
          <h3>{b==="first" ? <First/> : b==="second" ? <Second/> : "compo not valid"}</h3>
        </div>
      </div>
    </div>
  )
}

export default EmpHomepage


export function First()
{
  return(
    <h1 className='text-danger'>this is  first component</h1>
  )
}

export function Second()

{
  return(
    <h1 className='text-success bg-warning'>this is second component page</h1>
  )
}
