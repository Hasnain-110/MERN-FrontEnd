import React,{useState,useEffect} from 'react';
import './Login.css';
import axios from 'axios';


const AdminLogin =(props) => {

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);           
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const payload={
            email:email,
            password:password,
        }
        console.log("data  >>>",payload);
        axios.post('http://localhost:3005/Admin/login',payload)
        .then(function (response) {
            console.log('response :::',response);
            localStorage.setItem('token',response.data.accessToken);

        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <div className="divMain">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="enter your email"
                        name="txtEmail"
                        required
                        className="txt"
                        value={email}
                        onChange={handleChangeEmail}

                    />
                     <input 
                        type="password" 
                        placeholder="enter your password"
                        name="txtPass"
                        required
                        className="txt"
                        value={password}
                        onChange={handleChangePassword}                    
                    />
                     <input 
                        type="submit" 
                        value="LOGIN"
                        name="submit"                        
                        className="txt"
                    />
                    <br/>
                </form>
            </div>
        </div>     

     );
}
 
export default AdminLogin;