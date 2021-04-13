import React,{useState} from 'react';
import axios from 'axios';



const InsertRecord = (props) => {


    const[email, setEmail]=useState(undefined);
    const[name, setName]=useState(undefined);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeName =(e) => {
        setName(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const payload={
            email:email,
            name:name,
        }
         console.log('Payload data',payload);
        const res=await axios.post('http://localhost:3005/Student/insert',payload)
        .then((res)=> 
        {console.log(res)},
        (error)=>{
            console.log(error);
        });
    }

    return ( 
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
                    <td><label>Enter Name:</label></td>
                    <td><input type="text"
                     name="txtEmail" 
                     className="txt"
                     value={name}
                     onChange={handleChangeName}
                     /> </td>
                </tr>    
                <tr>
                    <td></td>
                    <td><input type='submit' value="SAVE"/ > </td>                                        
                </tr>               
            </table>
            </form>
        </div>
     );
}
 
export default InsertRecord;