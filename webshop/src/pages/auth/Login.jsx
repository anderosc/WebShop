import { useState } from "react"
import { useRef } from "react"
import { AuthContext } from "../../store/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


function Login() {

  const usernameRef = useRef()
  const passwordRef = useRef()
  const {setLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const login = () => {
    setLoggedIn(true)
    sessionStorage.setItem("token", "token123");
    navigate("/admin")
  }

  return (
    <div>
      <br /> <br />
      <label>Username</label><br />
      <input ref={usernameRef} type="text" /><br />
      <label>Password</label><br />
      <input ref={passwordRef} type="password" /><br /><br />
      <button onClick={login} className="button">Login</button>
    </div>
  )
}

export default Login