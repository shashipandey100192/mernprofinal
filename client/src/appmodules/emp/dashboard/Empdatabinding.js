import React from 'react';
import Mylist from '../../Mystudentlist';

function Empdatabinding() {
    console.log(Mylist);
    return (
        <div className='container'>
            <div className='row'>
                {Mylist.map((d) => {
                   if(d.sno===2 || d.sno===5)
                   {
                    return (
                        <div className='col-md-3'>
                            <div className='card p-3 mt-2 bg-danger'>
                                <h1>sno:{d.sno}</h1>
                                <h4>Student Name:{d.name}</h4>
                                <p>Subject:{d.subject}</p>
                            </div>
                        </div>
                    )
                   }
                   else
                   {
                    return (
                        <div className='col-md-3'>
                            <div className='card p-3 mt-2'>
                                <h1>sno:{d.sno}</h1>
                                <h4>Student Name:{d.name}</h4>
                                <p>Subject:{d.subject}</p>
                            </div>
                        </div>
                    )

                   }
                })}
            </div>
        </div>
    )
}

export default Empdatabinding