import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
export const Register = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="under"></div>
        </div>
        <div className="inputs">
            <form>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="text" name="phone" placeholder="Phone"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Sign Up</button>
                <span>Already have an account?? <Link to="/login">Login</Link></span>
            </form>
      </div>
    </div>
  )
}
