import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Page = () => {
    var [state,setpage] = useState("") 
    const homename = ()=>{
        setpage("Home page")
    }
    const galleryname = ()=>{
        setpage("Gallery Page")
    }
    const contactname = ()=>{
        setpage("Contact page")
    }
  return (
    <div>
        
     {/* <Button variant='contained' color='primary' onClick={homename}>Home page</Button>
     <Button variant='contained' color='seconday' onClick={galleryname}>Gallery page</Button>
     <Button variant='contained' color='success' onClick={contactname}>Contact page</Button> */}
     <Typography>Welcome to {state}</Typography>
    </div>
  )
}

export default Page
