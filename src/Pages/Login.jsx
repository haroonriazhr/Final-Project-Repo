import '../Pages/Style/Login.css'
const Login = () => {
  return (
    <div className="login">
      <div className="Login-container">
        <h1>Sign Up</h1>
        <div className="Login-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="password"  placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p >Already have an account? <span>Login</span></p>
        <div className="login-condition">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login