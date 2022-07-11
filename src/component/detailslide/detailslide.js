import Navbar from '../navbar/navbar';
import './detailslide.css';

function DetailSlider() {
  return (
    <>
      
      <div className="card text-black details">
      <div className="imagedetail">
        <img src="https://cdn.pixabay.com/photo/2022/03/20/21/34/bird-7081904_960_720.jpg" class="card-img" alt="..."/>
        </div>
          <div className="card-img-overlay">
          
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
            <button type="button" class="btn btn-danger">Danger</button>

          </div>
      </div>
    </>
  );
}

export default DetailSlider;
