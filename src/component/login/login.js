import './login.css'
import Navbar from '../navbar/navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useDispatch } from "react-redux"
import localforage from "localforage"
const axios = require('axios').default

function Login() {

  const [mail, setMail] = useState(null)
  const [password, setPassword] = useState(null)
  
  let dispatch = useDispatch()
  let navigate = useNavigate()

  function login(e){
    e.preventDefault()
    axios.get('http://localhost:7119/login?mail='+mail+'&password='+password,{
    headers : {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
    .then(function (response) {
      if(response.data!=null){
        localforage.setItem('user', response.data).then(()=>{
          dispatch({ type: "SET-USER", payload: response.data })
          console.log(response.data)
          navigate("/")
        })
        /*localforage.setItem('user', response.data, function (value) {
          dispatch({ type: "SET-USER", payload: response.data })
          console.log(response.data)
          //navigate("/")
        })*/
      }
    })
  }

  return (
    <>
      <Navbar/>
        <div className="signin m-auto">
          <form>
          <h4 class="mb-3">Login</h4>
            <div className="mb-3 test">
              <label className="form-label">Email address</label>
              <input type="email" required className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" onChange={(e)=>setMail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" required className="form-control" id="exampleInputPassword" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-danger" onClick={(e)=>{
                login(e)
              }}>Submit</button>
            </div>
            <div className="mb-3">
              If you don't have a account, <Link to="/register">click here</Link>
            </div>
          </form>
        </div>
    </>
  )
}

export default Login