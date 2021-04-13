import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
  


const UpdateRecord = (props) => {

    const [data, setData]=useState([]);

    useEffect(async()=>{

        const res=await axios.get('http://localhost:3005/Student/show');
        let datas=res.data;
        const dataList=datas.map(data=>(
             data._id
        ));
        setData(dataList);
         //console.log('++++++++++++++',res.data);
         //console.log('++++++++++++++', dataList);

        // setData(res.data);
      console.log(data);
    },[]);    

    return (         
        <div>
            {
                
            }
            <ListGroup horizontal>
                <ListGroup.Item>
                    <input type="text" name="textName" />
                </ListGroup.Item>
                <ListGroup.Item>
                     <input type="text" name="textName" />
                </ListGroup.Item>
                <ListGroup.Item>
                <input type="submit" value="UPDATE" />
                </ListGroup.Item>
            </ListGroup>
        </div>
     );
}
 
export default UpdateRecord;