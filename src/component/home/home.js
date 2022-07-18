import Navbar from '../navbar/navbar'
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DetailSlider from '../detailslide/detailslide'
import './home.css'
import localforage from 'localforage'

function Home() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() =>{
        localforage.getItem('user').then(function(value) {
            if(value!=null) dispatch({ type: "SET-USER", payload: value })
        })
    }, [])

  return (
    <div>
        {
            user != null ? 
            <div>
                <Navbar id={2} user={user}/>
                je suis connecter
                <DetailSlider/>
            </div>
            : <div>
                <Navbar id={1}/>
                je suis pas connecter
            </div>
        }
    </div>
  )
}

export default Home