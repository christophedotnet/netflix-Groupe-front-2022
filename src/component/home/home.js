import Navbar from '../navbar/navbar'
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import DetailSlider from '../detailslide/detailslide'
import './home.css'
import localforage from 'localforage'

function Home() {

    const [user, setUser] = useState(null)

    const dispatch = useDispatch()

    useEffect(() =>{
            localforage.getItem('user', function (err, value) {
                setUser(value)
                dispatch({ type: "SET-USER", payload: value })
          });
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