import React from 'react'
import { Link } from 'react-router-dom' 
import Form from '../components/Form'
import "../styles/register.css"
const Register = () => {
  return (
    <div>
    <Form route="/api/user/register/" method="register"/>
    <p className='reg'>Already Registred ? <Link to="/Login">Login here</Link></p>
    </div>
  )
}

export default Register