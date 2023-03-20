import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';


const Name = () => {
    var[fname,setname] = useState("")
    const changeName = (event)=>{
        const {name,value} = event.target;
        setname(value);
    }
    useEffect(()=>{
        setname("[Enter name]")
    }, [])
  return (
    <div>
  <Typography variant='h2'>My Name is {fname}</Typography>
     <br>
     </br>
     <TextField id="outlined-basic" label="Enter name"onChange={(e)=> changeName(e)}  />
     <br>
     </br>
     <br>
     </br>
     <Button variant='contained' color='primary'>Add name</Button>

    </div>
  )
}

export default Name
