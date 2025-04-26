import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';



function Jsonpagedata() {
  const [mydata,setmydata]=useState([]);

  const myapidata = ()=>{
    try{
      axios.get('http://localhost:8800/user').then((d)=>{
        console.log(d.data);
        if(d.data)
        {
        setmydata(d.data);
        }

      });
  }
  catch(err)
  {
    console.log(err+"thisis")
  }
}

  
const columns: GridColDef[] = [
  { field: 'id', headerName: 'sno', width: 70 },
  { field: 'fullname', headerName: 'User Name', width: 200 },
  { field: 'email', headerName: 'User Email', width: 300 },
  
];


const paginationModel = { page: 0, pageSize: 5 };
  
  useEffect(()=>{
    myapidata();
  },[])

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={mydata}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      // checkboxSelection
      sx={{ border: 0 }}
    />
  </Paper>
  )
}

export default Jsonpagedata