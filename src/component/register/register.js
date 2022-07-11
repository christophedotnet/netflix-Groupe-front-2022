import Navbar from "./../navbar/navbar"
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
    return(
        <>
      <Navbar/>
        <div className="signin m-auto">
          <form>
          <h4 class="mb-3">Register</h4>
            <div className="mb-3 test">
              <label className="form-label">First name</label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 test">
              <label className="form-label">Last name</label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 test">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 test">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-danger">Submit</button>
            </div>
            <div className="mb-3">
              If already have a account, <Link to="/login">click here</Link>
            </div>
          </form>
        </div>
    </>
    )
}

export default Register;
