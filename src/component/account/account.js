
import './account.css'
import Navbar from '../navbar/navbar'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
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
                    axios.post("http://localhost:7119/api/v1/avatar?id="+user.id+'&avatar='+e.target.files[0].name, formData,{
                    headers : {"Content-Type": "multipart/form-data", 'Authorization': `Bearer ${localStorage.getItem("token")}`},
                    }).then((newUser)=>{
                        newUser != null && dispatch({ type: "SET-USER", payload: newUser.data })
                        /*if(value.status===200){
                            axios.patch("http://localhost:7119/api/v1/user/setAvatar?id="+user.id+'&avatar='+e.target.files[0].name,{
                            headers : { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}` }
                            }).then((newUser)=>{
                                //update only the avatar of user
                                newUser != null && dispatch({ type: "SET-USER", payload: newUser.data })
                            })
                        }*/
                    })
                    
                }}
                
              />

                <button type='button' onClick={()=>logout()}>deconexion</button>

            </div>
            }

        </div>
    )
}

export default Account