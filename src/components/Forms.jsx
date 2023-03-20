import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Forms = () => {
    var [fname,setname] =useState("")
    const finput = (e) => {
       setname(e.target.value);
    }
    var[lname,setLname] = useState("")
    const linput  = (e) =>{
        setLname(e.target.value)

    }
      return (
    <div>
        <Typography>First Name is {fname}</Typography>
     <TextField label='First Name' variant='outlined'onChange={(e)=> finput(e)}/>
     <br>
     </br>
     <br>
     </br>
     <Typography>Second Name is {lname}</Typography>
     <TextField label='Second Name' variant='outlined'onChange={(e)=> linput(e)}/> 
    </div>
  )
}

export default Forms
