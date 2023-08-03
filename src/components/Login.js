import React, { useContext, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import AlertContext from '../context/alert/AlertContext'
function Login() {
  const context = useContext(AlertContext)
  const { showAlert } = context
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(credentials);
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken)
      navigate("/")
      showAlert("succesfully Loggedin", "success")
    }
    else {
      showAlert("invalid user", "danger")
    }
  }
  return (
      <section class="container">
        <div class="login-container">
          <div class="circle circle-one"></div>
          <div class="form-container">
            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
            <h1 class="opacity">LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="USERNAME" onChange={onChange} value={credentials.email} id="email" name='email'/>
              <input type="password" placeholder="PASSWORD" onChange={onChange} value={credentials.password} id="password" name='password' />
              <button class="opacity">Login</button>
            </form>
            <div class="register-forget opacity">
              <Link to="/signup">REGISTER</Link>
            </div>
          </div>
          <div class="circle circle-two"></div>
        </div>
        <div class="theme-btn-container"></div>
      </section>
  )
}

export default Login
