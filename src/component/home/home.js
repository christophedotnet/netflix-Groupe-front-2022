import './home.css'
import Navbar from '../navbar/navbar'
import { useSelector } from "react-redux"
import DetailSlider from '../detailslide/detailslide'


function Home() {

    const user = useSelector((state)=>state.user)

    return (
        <div>
            {
                user != null ? 
                <div>
                    <Navbar id={2}/>
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