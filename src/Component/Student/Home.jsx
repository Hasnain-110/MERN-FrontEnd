import React from 'react';
import "../../App.css"
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import insert from './InsertRecord';
import update from'./UpdateRecord';

const Home = () => {
    return (  
        <div>
        <Router>

            <table className="tableSS">
                <tr>
                    <td>
                      <Link to="./form">Insert</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                      <Link to="/insert">Show</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                      <Link to="/update">Update</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                      <Link to="/insert">Delete</Link>
                    </td>
                </tr>
            </table>
        
        </Router>
        </div>
     
    );
}
 
export default Home;