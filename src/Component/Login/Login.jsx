import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="divMain">
                <form>
                    <input 
                        type="text" 
                        placeholder="enter your username"
                        name="txtUser"
                        required
                        className="txt"
                    />
                     <input 
                        type="text" 
                        placeholder="enter your password"
                        name="txtPass"
                        required
                        className="txt"
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
 
export default Login;