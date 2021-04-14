import React from 'react';

const Home =() => {
    console.log('My Token',localStorage.getItem('token'));
    const clearToken=()=>
    {
        localStorage.clear();
    }
    return (  
        <div>
            <h1>You are on home page...</h1>
            <button onClick={clearToken}>Logout</button>
        </div>
    );
}
 
export default Home;