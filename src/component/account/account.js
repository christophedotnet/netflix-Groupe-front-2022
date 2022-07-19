
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
                    axios.post("http://localhost:7119/avatar/", formData,{
                    headers : {'Access-Control-Allow-Origin': '*',"Content-Type": "multipart/form-data" }
                    }).then((value)=>{
                        if(value.data){
                            axios.get("http://localhost:7119/user/setavatar?id="+user.id+'&avatar='+e.target.files[0].name,{
                            headers : { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
                            }).then((newUser)=>{
                                newUser != null && dispatch({ type: "SET-USER", payload: newUser.data })
                            })
                        }
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