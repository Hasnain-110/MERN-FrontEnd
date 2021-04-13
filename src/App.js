// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FormData from './Component/FormData';
import MenuBar from './Component/MenuBar'
import StudentHome from './Component/Student/Home'
import Login from './Component/Login/Login'

//student data
import Sinsert from './Component/Student/InsertRecord';
import Show from './Component/Student/ShowRecord';
import Update from './Component/Student/UpdateRecord'





function App() {
  return (
    <div>
    <Router>
        <Route path='/form' exact component={FormData}/>
        <Route path='/menu' exact component={MenuBar}/>
        <Route path='/student' exact component={StudentHome}/>

        <Route path='/student/insert' exact component={Sinsert}/>
        <Route path='/student/show' exact component={Show}/>
        <Route path='/student/update' exact component={Update}/>




        <Route path='/login' exact component={Login}/>
    </Router>
    </div>
  );
}

export default App;
