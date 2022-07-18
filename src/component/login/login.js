
import Navbar from '../navbar/navbar'
import { Link, useLocation } from 'react-router-dom'
import './login.css'
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import localforage from "localforage";
import { v4 as uuid } from 'uuid'
import imageToBase64 from 'image-to-base64/browser'
import { useNavigate } from 'react-router-dom'
//import {encode, decode} from 'node-base64-image';
const axios = require('axios').default

function Login() {

  const [mail, setMail] = useState(null)
  const [password, setPassword] = useState(null)
  
  let dispatch = useDispatch()
  
  let navigate = useNavigate();

  function login(e){
    e.preventDefault()
    axios.get('http://localhost:7119/login?mail='+mail+'&password='+password
    ,{
      headers : {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
    })
    .then(function (response) {
      if(response.data!=null){

        console.log(response.data)
        /*localStorage.setItem('user', JSON.stringify(response.data))
        dispatch({
          type: "SET-USER",
          payload: response.data
        })*/
        
        
        localforage.setItem('user', response.data, function (err) {
          dispatch({
            type: "SET-USER",
            payload: response.data
          })
          navigate("/")
        })
          // we got our value

        /*localforage.setItem('user', response.data).then(function () {
          return localforage.getItem('key');
        }).then(function (value) {
          // we got our value
        dispatch({
          type: "SET-USER",
          payload: response.data
        })
        navigate("/")
        }).catch(function (err) {
          // we got an error
        });
        console.log(response.data)
        //navigate("/")
        */
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Navbar/>
        <div className="signin m-auto">
          <form>
          <h4 class="mb-3">Login</h4>
            <div className="mb-3 test">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" onChange={(e)=>setMail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" onChange={(e)=>setPassword(e.target.value)}/>
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
  );
}

export default Login