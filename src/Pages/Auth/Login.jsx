import React from 'react'
import LoginForm from '../../components/Form/LoginForm'

const Login = () => {
  return (
    <div className="flex-col align-center  justify-center" >
      <h1>Login Page</h1>
      <div className='flex justify-center align-center'>
      <LoginForm  className="bg-white  rounded-lg"/>
      </div>
    </div>
  )
}

export default Login