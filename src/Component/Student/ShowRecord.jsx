import React,{useState,useEffect} from 'react';
import axios from 'axios';
 


const ShowRecord = (props) => {

    const [data, setData]=useState(null);

    // const[email, setEmail]=useState(undefined);
    // const[name, setName]=useState(undefined);

    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handleChangeName =(e) => {
    //     setName(e.target.value)
    // }
    useEffect(async()=>{

        const res=await axios.get('http://localhost:3005/Student/show');
        let datas=res.data;
        const dataList=datas.map(data=>(
           <li>
               Email :: {data.email} , 
               Name:: {data.name}
           </li>
        ));
        setData(dataList);

    },[]);

    return ( 
        <div>
            <ul >
                {data}
            </ul>
        </div>
     );
}
 
export default ShowRecord;