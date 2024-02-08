import React from 'react';
import './login_page.css';
import img1 from '../images/img1.png';


function Login() {
  return (
    <div className="container">
    <div>
      <img className='image' src={img1} alt='' />
    </div>
    <div>
      <div className='textStyle'>
        <div>
          <span>Welcome To </span>
          <span className='color_text'>EcoRide</span>
        </div>
        <span>Networks</span> 
      </div>
      <div>

      <div className='gap'>
        <text className='Username'>User Name</text>
      </div>
      <div className='input'>
        <input type='text' placeholder='User Name' />
      </div>

      <div className='gap'>
        <text className='Username'>Password</text>
      </div>
      <div className='input'>
        <input type='password' placeholder='Password' />
      </div>

      </div>
      <div className='gap'>
        <div className='login'>Login</div>
      </div>
    </div>
  </div>
  );
}

export default Login;
