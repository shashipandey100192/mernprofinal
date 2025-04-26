import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Myaxios() {
    const [users, setusers] = useState([])

    const Myaxiosfunc = () => {
        axios.get('https://dummyjson.com/users').then((d) => {
            console.log(d.data.users);
            setusers(d.data.users);
        })
    };

    //     const Myaxiosfunc = ()=>{
    //        fetch('https://dummyjson.com/users').then((d)=>{
    //             console.log(d)
    //         })
    // };

    useEffect(() => {
        Myaxiosfunc();
    }, [])


    return (
        <div className='container'>
            <div className='row'>
                {users.map((u) => {
                    return (
                        <div className='col-md-3' key={u.id}>
                            <Link className='card p-3 mt-2' to={`detailspage/`+u.id}>
                                <h1>UId:{u.id}</h1>
                                <h4>Name: {u.firstName}</h4>
                                <p>Gender: {u.gender}</p>
                                <p>Group:{u.bloodGroup}</p>
                                <p>City:{u.company.address.city}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myaxios