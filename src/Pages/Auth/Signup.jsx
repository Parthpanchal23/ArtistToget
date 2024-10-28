import React from 'react'
import RegistartionForm from '../../components/Form/RegistartionForm';

const Signup = () => {
  return (
    <div className="flex-col align-center  justify-center" >
      <h1>Signup Page</h1>
      <div className='flex justify-center align-center'>
      <RegistartionForm  className="bg-white  rounded-lg"/>
      </div>
    </div>
  )
}
export default Signup;