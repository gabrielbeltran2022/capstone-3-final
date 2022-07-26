import { Link } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import {UserProvider} from './userContext'


import './App.css';


function App() {

  const [user, setUser] = useState({
  //   email: localStorage.getItem('email')
  id: null,
  isAdmin: null
   })

  const unsetUser = () => {
    localStorage.clear()
  }

  useEffect(()=> {
    fetch('http://localhost:4000/users/details', {

      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {

      if(typeof data._id !== "undefined"){


        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      } else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })



  }, [])
 
  return (
  <UserProvider value={{user, setUser, unsetUser}}>

    <Router>
        <Header/>
        <Navbar/>
    <Container>
      
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
               <Route path="*" element={<NotFound/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/my-cart" element={<Cart/>}/>
           </Routes>
        
          </Container>
    </Router>

    </UserProvider>

  
  );
}

export default App;
