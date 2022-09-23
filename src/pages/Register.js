import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWarper'>
        <span className='logo'>React Chat</span>
        <span className='title'>Register</span>
          <form>
            <input type='text' placeholder='Display Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input style={{display:'none'}} type='file' id='file'/>
            <label htmlFor='file'>i will add image here later</label>
            <button>Sign up</button>
          </form>
          <p>Do you have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register; 
