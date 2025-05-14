import React from 'react'
import './LogInSignUp.css'
import user_icon from './Assets/icons/user-icon.png'
import password_icon from './Assets/icons/password-icon.png'
import email_icon from './Assets/icons/email-icon.png'

function LogInSignUp() {
  const [action, setAction] = React.useState('Sign Up')
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="user-icon" />
          <input type="text" placeholder='Name' />
        </div>}

        <div className="input">
          <img src={email_icon} alt="email-icon" />
          <input type="email" placeholder='Email' />
        </div>
        <div className="input">
          <img src={password_icon} alt="password-icon" />
          <input type="password" placeholder='Password' />
        </div>

        <div className="forgot-password">
          {action === "Sign Up" ? <div></div> : <div>Forgot Password <span>Click here!</span></div>}

        </div>

        <div className="signup-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default LogInSignUp
