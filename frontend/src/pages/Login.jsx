import React from 'react'
import Form from "../components/Form"
import { Link } from 'react-router-dom'
import "../styles/login.css"

const Login = () => {
  return (
      <div>
            <Form route="/api/token/" method="login"/>
            <p className='log'>New User? <Link to="/register">Register here</Link></p>
      </div>
  )
}

export default Login
