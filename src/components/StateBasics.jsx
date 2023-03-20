import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname] = useState("Tiya")
    const changeName =()=>{
        setfname("Meera")
    } 
    return (
    <div>
      <Typography>Welcome {fname}</Typography>
      <br>
      </br>
      <Button variant='contained'onClick={changeName}>change</Button>
  </div>
  )
}

export default StateBasics
