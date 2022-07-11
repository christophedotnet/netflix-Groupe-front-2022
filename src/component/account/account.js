import Navbar from '../navbar/navbar'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuid } from 'uuid'
import './account.css'

function Account() {

    let user = useSelector(state=>state.user)
    let dispatch = useDispatch()

    useEffect(() =>{
        if(user==null){
            //redirect to home
        }
    }, [])


    function logout(){
        dispatch({
            type: "RESET-USER",
            payload: null
        })
    } 

    return (
        <div>
            <Navbar id={2} user={user}/>
            Account of 
            {
                uuid()
            }
            <button onClick={logout}>déconnexion</button>
        </div>
    )
}

export default Account