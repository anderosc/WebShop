import { useRef } from "react"
 
function Signup() {
 
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const genderRef = useRef()
  const emailRef = useRef()
  const birthRef = useRef()
  const passwordRef = useRef()
 
  return (
    <div>
      <h2>Sign up:</h2>
      <br /> <br />
      <label>First Name</label><br />
      <input ref={firstnameRef} type="text" /><br />
      <label>Last Name</label><br />
      <input ref={lastnameRef} type="text" /><br />
      <label>Gender</label><br />
      <input type="radio" id="male" name="gender" ref={genderRef}/>Male
      <input type="radio" id="female" name="gender" ref={genderRef}/>Female<br />
      <label>Email</label><br />
      <input ref={emailRef} type="text" /><br />
      <label>Date of Birth</label><br />
      <input ref={birthRef} type="date" /><br />
      <label>Password</label><br />
      <input ref={passwordRef} type="password" /><br />
      <label>Confirm Password</label><br />
      <input ref={passwordRef} type="password" /><br /><br />
      <button className="button">Sign Up</button>
    </div>
  )
}

export default Signup