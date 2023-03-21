import { Button, TextField, } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var [submitted,setSubmitted] =useState(false);
    var [inputname,setInputname] = useState({
        fname: ""
      
     })
     var [Validation,setValidation] = useState({
        fname: ""
     })
     const inputHandle =(e) =>{
         const { name,value } =e.target
         setInputname({...inputname,[name]: value })
     }
     const checkValidation = () => {
        let errors = Validation;
        if (!inputname.fname.trim()) {
            errors.fname = "First name is required";
        }else{
            errors.fname = "";
        }
        setValidation(errors);
        }
     useEffect(() =>{
        checkValidation();
     });
     const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
     };
  return (
    <div>
       <form
         id='registrationForm'
         onSubmit={handleSubmit} 
       > 
    
     <TextField label='First Name' variant='outlined' name='fname' value={inputname.fname} onChange={inputHandle}/>
     <br>
     </br>
     <br></br> 
     {(Validation.fname && submitted) && <p>{Validation.fname}</p>}
     <Button  type='submit' variant='contained' color='primary'>Save</Button>
     </form>
    </div>
  )
}

export default Validation
