import React,{useState} from 'react';
import '../App.css'

import axios from 'axios';
const FormData=(props)=>{

const[email, setEmail]=useState(undefined);
const[password, setPassword]=useState(undefined);

const handleChangeEmail = (e) => {
    setEmail(e.target.value)
}
const handleChangePassword =(e) => {
    setPassword(e.target.value)
}
const handleSubmit = async(e) => {
    e.preventDefault()
    const payload={
        email:email,
        password:password,
    }
   console.log('Payload data',payload);
   const res=await axios.post('http://localhost:3002/Teacher/ins',payload)
   .then((res)=> 
   {console.log(res)},
   (error)=>{
       console.log(error);
   }
   );
}

    return(
        <div>
           <form onSubmit={handleSubmit}>
            <table>                
                <tr>
                    <td><label>Enter Email :</label></td>
                    <td><input type="email" 
                    name="txtEmail" 
                    className="txt"
                    value={email}
                    onChange={handleChangeEmail}
                    /> </td>
                </tr> 
                <tr>
                    <td><label>Enter Password :</label></td>
                    <td><input type="password"
                     name="txtEmail" 
                     className="txt"
                     value={password}
                     onChange={handleChangePassword}
                     /> </td>
                </tr>   
                <tr>
                    <td><label>Choose Profile :</label></td>
                    <td><input type="file" name="txtEmail" className="txt"/> </td>
                </tr>   
                <tr>
                    <td></td>
                    <td><input type='submit' value="SAVE"/ > </td>                                        
                </tr>               
            </table>
            </form>
        </div>
    )
};
export default FormData;