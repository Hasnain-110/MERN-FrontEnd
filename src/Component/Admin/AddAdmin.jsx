import React,{useState} from 'react';
//for react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css';
import axios from 'axios'




const AddAdmin = (props) => {
let id='';
    const notify = () => toast("Wow so easy!",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }); 

    const[email, setEmail]=useState('');
    const[name, setName]=useState();
    const[password, setPassword]=useState();
    const[file, setFile]=useState('');
    const [mid, setMId]=useState();

    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleChangeFile=(e)=>{
        setFile(e.target.files[0]);
    }

    const photoSender=()=>{
        console.log('IMG::==========', file);
        console.log('Rcd-2:::',id);
        const data=new FormData();
        data.append('file', file)
        data.append('id',id);
        


        const res=axios.post('http://localhost:3005/Admin//insertimg', data)
        .then((res)=>
        {
            console.log(res);
        },
        (error)=>{
            console.log(error);
        }
        );

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let payload={
            email:email,
            name:name,
            password:password,
            file:file,
        }
        //console.log('Payload data::;',payload);
        const res=axios.post('http://localhost:3005/Admin/insert', payload)
        .then((res)=>
        {
            console.log(res);
            if(res.status===200)
            {            
                id=res.data._id;
                photoSender();
                
            }
        },
        (error)=>{
            console.log(error);
        }
        );
        
    }
    return (
        <div>
            <div className="divMain">
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                        type="text" 
                        placeholder="enter your name"
                        name="txtName"
                        required
                        className="txt"
                        value={name}
                        onChange={handleChangeName}
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
                        type="file" 
                        placeholder="choose your file"
                        name="file"
                        className="txt"                       
                        onChange={handleChangeFile}
                    />
                     <input 
                        type="submit" 
                        value="ADD DATABASE"
                        name="submit"                        
                        className="txt"
                    />
                    <br/>
                </form>
            </div>
        </div>     

     );
}
 
export default AddAdmin;