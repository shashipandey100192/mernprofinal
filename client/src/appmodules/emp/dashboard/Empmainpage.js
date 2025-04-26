import React from 'react'
import Headerpage from '../shares/Headerpage'
import Sidebarpage from '../shares/Sidebarpage'
import Footerpage from '../shares/Footerpage'
import { Outlet } from 'react-router-dom'

function Empmainpage() {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 border'>
           <Headerpage></Headerpage>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-2 border'>
          <Sidebarpage></Sidebarpage>
        </div>
        <div className='col-md-10 border page'>
           <Outlet></Outlet>
        </div>
    </div>
    <div className='row'>
        <div className='col-12 border g-0'>
           <Footerpage></Footerpage>
        </div>
    </div>
   

</div>
  )
}

export default Empmainpage