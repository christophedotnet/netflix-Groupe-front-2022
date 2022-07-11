import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './faq.css'

function Faq() {

  let faqs = useSelector(state=>state.faqs)

  return (
    <div className="backgroundBlack">
    <div className="faq m-auto">
      <div className="accordion accordion-flush" id="accordionExample">
      {
        faqs.map((e,i)=>{
          return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed faq" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+i} aria-expanded="false" aria-controls={"collapseOne"+i}>
                  { e.Question }
                </button>
              </h2>
              <div id={"collapseOne"+i} className="accordion-collapse collapse faq1" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  { e.Response }
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
    </div>
  );
}

export default Faq;
