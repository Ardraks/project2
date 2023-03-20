import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var [inputname,setInputname] = useState({
       fname: "",
       lname: "" 
    })
    const inputHandle =(e) =>{
        const { name,value } =e.target
        setInputname({...inputname,[name]:value})
    }
  return (
    <div>
       <Typography>First Name is {inputname.fname}</Typography>
     <TextField label='First Name' variant='outlined'name='fname' value={inputHandle.fname} onChange={inputHandle}/>
     <br>
     </br>
     <br>
     </br>
     <Typography>Second Name is {inputname.lname}</Typography>
     <TextField label='Second Name' variant='outlined'name='lname' value={inputHandle.lname} onChange={inputHandle}/> 
    </div>
  )
}

export default New
