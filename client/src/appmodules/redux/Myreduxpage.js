import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,customage } from './Myactionlist';

function Myreduxpage() {

    const mydata = useSelector((state) => state.counter.value)
    const myage = useSelector((state) => state.counter.age)
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Myreduxpage {mydata}</h1>
        <h1>state ate {myage}</h1>
        <button onClick={() => dispatch(increment())}>increment action</button>
        <button onClick={() => dispatch(customage())}>age action</button>
        </div>

  )
}

export default Myreduxpage