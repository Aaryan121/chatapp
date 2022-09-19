import React from 'react'

const Register = () => {
  return (
    <div className={StyleSheet.formContainer}>
        <div className={StyleSheet.formWarper}>
        <span className='logo'>React Chat</span>
        <span className='title'>Register</span>
          <form>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input type='file' />
            <button>Sign up</button>
          </form>
          <p>Do you have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register;
