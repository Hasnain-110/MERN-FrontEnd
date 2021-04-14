// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Component/Home'
import FormData from './Component/FormData';
import MenuBar from './Component/MenuBar'
import StudentHome from './Component/Student/Home'
import Login from './Component/Login/Login'

//student data
import Sinsert from './Component/Student/InsertRecord';
import Show from './Component/Student/ShowRecord';
import Update from './Component/Student/UpdateRecord'

//admin login
import AdminLogin from './Component/Admin/Login';
import AddAdmin from './Component/Admin/AddAdmin';


//for cheking individual component
import Toast from './Component/Demo/Toastify'

//for reacl time chat bo system...
import Join from './Component/RealTimeChat/Join';
import Chat from './Component/RealTimeChat/Chat'





function App() {
  return (
    <div>
    <Router>

        <Route path='/home' exact component={Home}/>
        <Route path='/form' exact component={FormData}/>
        <Route path='/menu' exact component={MenuBar}/>
        <Route path='/student' exact component={StudentHome}/>

        <Route path='/student/insert' exact component={Sinsert}/>
        <Route path='/student/show' exact component={Show}/>
        <Route path='/student/update' exact component={Update}/>


        <Route path='/admin/login' exact component={AdminLogin}/>
        <Route path='/admin/insert' exact component={AddAdmin}/>


        <Route path='/demo' exact component={Toast}/>

        <Route path='/login' exact component={Login}/>


        <Route path='/' exact component={Join}/>
        <Route path='/chat' exact component={Chat}/>

    </Router>
    </div>
  );
}

export default App;
