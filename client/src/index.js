import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/style.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Welcomepage from './Welcomepage';
import EmpLogin from './appmodules/emp/auth/EmpLogin';
import Empregistor from './appmodules/emp/auth/Empregistor';
import Empmainpage from './appmodules/emp/dashboard/Empmainpage';
import EmpHomepage from './appmodules/emp/dashboard/EmpHomepage';
import Empproperty from './appmodules/emp/dashboard/Empproperty';
import Empdatabinding from './appmodules/emp/dashboard/Empdatabinding';
import Myaxios from './appmodules/emp/dashboard/Myaxios';
import Userdetailspage from './appmodules/emp/dashboard/Userdetailspage';
import Empdetailspage from './appmodules/emp/dashboard/Empdetailspage';
import Chartspage from './appmodules/emp/dashboard/Chartspage';
import { Provider } from 'react-redux';
import { Mystorage } from './appmodules/redux/Mystore';
import Myreduxpage from './appmodules/redux/Myreduxpage';
import Jsonpage from './appmodules/emp/dashboard/Jsonpage';
import Jsonpagedata from './appmodules/emp/dashboard/Jsonpagedata.tsx';
// import Mylazypage from './appmodules/emp/dashboard/Mylazypage';
const Mylazypage = lazy(()=>import('./appmodules/emp/dashboard/Mylazypage'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={Mystorage}>
      <BrowserRouter>
     
          <Routes>
            <Route path='' element={<Welcomepage/>}></Route>
            <Route path='employee' element={<EmpLogin/>}></Route>
            <Route path='employee/registor' element={<Empregistor/>}></Route>
            <Route path='empmainpage' element={<Empmainpage/>}>
              <Route path='' element={<EmpHomepage/>}></Route>
              <Route path='property' element={<Empproperty/>}></Route>
              <Route path='mydata' element={<Empdatabinding/>}></Route>
              <Route path='myaxios' element={<Myaxios/>}></Route>
              <Route path='myaxios/detailspage/:id' element={<Userdetailspage/>}></Route>
              <Route path='empdetails' element={<Empdetailspage/>}></Route>
              <Route path='mychart' element={<Chartspage/>}></Route>
              <Route path='mylazypage' element={<Suspense fallback={<h1 className='loading'>loading page</h1>}>
                <Mylazypage/>
              </Suspense>}></Route>
              <Route path='reduxpage' element={<Myreduxpage/>}></Route>
              <Route path='jsonpage' element={<Jsonpage/>}></Route>
              <Route path='datatable' element={<Jsonpagedata/>}></Route>
              
            </Route>
          </Routes>
          
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
