import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar(props) {

  const user = useSelector((state)=>state.user)

  return(
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/">Netflix</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            {
              props.id === 1 && <Link to="/login"><button className="btn btn-danger" type="submit">Login</button></Link>
            }
            {
              props.id === 2 &&
                <div>
                  <Link to="/account"> 
                  <img src={ user.avatar !== null && user.avatar !== "" ? "http://localhost:7119/Assets/Avatars/"+user.avatar : "/no_avatar.jpg" } 
                    style={{width:64,height:64,borderRadius: "5px"}} alt="..."></img></Link>
                </div>
            }
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
