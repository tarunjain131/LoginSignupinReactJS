import React from 'react'
import './Login.css';
export const Login = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Login</div>
            <div className="under"></div>
        </div>
        <div className="inputs">
            <form>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
      </div>
    </div>
  )
}
