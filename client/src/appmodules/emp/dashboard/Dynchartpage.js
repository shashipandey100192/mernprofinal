import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle,ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "about",
        uv: 4000,
        pv: 5000,
        amt: 6000,
    }

];

function Dynchartpage() {

    const [apidata, setapidata]=useState([])
    const [filterdata, setfulterdata]=useState([])


    const myapidata = ()=>{
        axios.get("https://dummyjson.com/recipes").then((d)=>{
            console.log(d.data.recipes);
            setapidata(d.data.recipes);
            
        })
    }
useEffect(()=>{
    myapidata();
},[])

const changevalue = (e)=>{

    setfulterdata(apidata.filter((d)=>{
        return d.cuisine===e.target.value
    }))
}

  return (
    <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 p-3'> Dyn Chart connect to API</div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <h1>Total data: {apidata.length}</h1>
                    </div>
                    <div className='col-md-6'>
                        <select className='form-select' onChange={changevalue}>
                            {apidata.map((d)=>{
                                return <option>{d.cuisine}</option>
                            })}
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <div className='card bg-dark text-white'>
                            
                            <ResponsiveContainer width={"100%"} height={300}>
                                <BarChart data={filterdata}>
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="cuisine" />
                                    {/* <YAxis /> */}
                                    <Tooltip />
                                    <Bar
                                        dataKey="reviewCount"
                                        fill="green"
                                    />
                                    <Bar
                                        dataKey="cookTimeMinutes"
                                        fill="red"
                                    />
                                   
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                   
                </div>
            </div>
  )
}

export default Dynchartpage