import DetailSlider from "./component/detailslide/detailslide";
import Faq from "./component/faq/faq";
import Navbar from "./component/navbar/navbar";
import Slider from "./component/slider/slider";
import './App.css';
import Signin from "./component/signin/signin";

function App() {
  return (
    <>
      <header>
        <div className="card text-black header">
            <div className="image">
            <img src="https://cdn.pixabay.com/photo/2022/06/08/10/20/lighthouse-7250229_960_720.jpg" class="card-img" alt="..." />
          </div>
          <div className="card-img-overlay">
            <Navbar></Navbar>
            <div className="bottom">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
              <button type="button" class="btn btn-danger">Danger</button>
            </div>
          </div>
        </div>

      </header>
      <Navbar></Navbar>
      <Slider></Slider>
      <DetailSlider></DetailSlider>
      <Faq></Faq>
      <Signin></Signin>


    </>
  );
}

export default App;
