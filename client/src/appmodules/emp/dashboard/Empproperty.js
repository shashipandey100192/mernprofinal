import React, { Fragment } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { customage } from '../../redux/Myactionlist';

function Empproperty() {
    const stuage = useSelector((state)=>state.counter.age);
    const abcd = useDispatch();
  
  return (
    <Fragment>
    <div>Empproperty {stuage}</div>
    <button className='btn btn-primary btn-sm' onClick={()=>abcd(customage())}> chage data</button>
    </Fragment>
  )
}

export default Empproperty