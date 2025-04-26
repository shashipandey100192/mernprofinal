import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle,ResponsiveContainer } from "recharts";
import Dynchartpage from './Dynchartpage';

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



function Chartspage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-3'> filter option , dashboard editor , features of the dashboard</div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='card bg-dark text-white'>
                        <ResponsiveContainer width={"100%"} height={300}>
                            <BarChart data={data}>
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="name" />
                                {/* <YAxis /> */}
                                <Tooltip />
                                <Bar
                                    dataKey="uv"
                                    fill="green"
                                    // activeBar={<Rectangle fill="pink" stroke="blue" />}
                                />
                                <Bar
                                    dataKey="pv"
                                    fill="red"
                                    // activeBar={<Rectangle fill="gold" stroke="purple" />}
                                />
                                <Bar
                                    dataKey="amt"
                                    fill="blue"
                                    // activeBar={<Rectangle fill="gold" stroke="purple" />}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        sdfsdfsd
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Dynchartpage></Dynchartpage>
                </div>
            </div>
        </div>
    )
}

export default Chartspage