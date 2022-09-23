import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWarper'>
        <span className='logo'>React Chat</span>
        <span className='title'>Register</span>
          <form>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
          </form>
          <p>You don't have an account ? Register</p>
        </div>
    </div>
  )
}

export default Login; 
