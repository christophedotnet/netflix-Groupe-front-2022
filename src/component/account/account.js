
import './account.css'
import Navbar from '../navbar/navbar'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { postAvatar } from '../../service/netflixService'
const axios = require('axios').default

function Account() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const user = useSelector((state)=>state.user)

    function logout(){
        dispatch({ type: "SET-USER", payload: null })
        navigate("/")
    } 

    useEffect(()=>{
        user == null && navigate("/")
    },[])

    return (
        <div>
            {
                user != null && 
                <div>
                    <Navbar id={2}/>
                    <input type="file" accept="image/*" label="Upload image File" onChange={(e) => {
                        const formData = new FormData()
                        formData.append("file", e.target.files[0])
                        postAvatar(user.id,e.target.files[0].name,formData,localStorage.getItem("token")).then((newUser)=>{
                            newUser != null && dispatch({ type: "SET-USER", payload: newUser.data })
                        })
                    }}/>
                    <button type='button' onClick={()=>logout()}>deconexion</button>
                </div>
            }
        </div>
    )
}

export default Account