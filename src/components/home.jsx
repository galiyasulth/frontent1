import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  

  return (
    <center>
      <div>
    <div style ={{backgroundImage:'url(image.jpg)', color:'white',backgroundrepeat:'no-repeat',backgroundsize:'cover',height:'1900px',width:'1600px'}}> 
      <br></br>
      <h1 style= {{fontSize:'100px'}}>Welcome, !</h1>
      <br></br>
      <p><h1>click here to login.</h1></p>
      <button style={{fontSize:'20px'}} onClick={logout}>logout</button>
    </div>
    </div>
    </center>
  );
};

export default Home;
