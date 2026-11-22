import "./CustomerReview.css"

import clientReviewOne from "../../../assets/images/client-review-one.jpg";
import clientReviewTwo from "../../../assets/images/client-review-two.jpg";
import clientReviewThree from "../../../assets/images/client-review-three.jpg";

function CustomerReview() {
  return (
    <>
    
    <main>
        <section className="client-section">
            <div className="container">
        <h1>Client <span className="client-review">Review</span></h1>
        <h2>Whta our happy customers say about us</h2>
        <div className="customer-box">
            <div className="customer-box-content">
                <div className="left-content">
                    <img src={clientReviewOne} alt="client reriew one" />
                </div>
                <div className="right-content">
                    <span className="star">★★★★☆</span>
                <p>"Exactly what I was looking for! Setup took less than five minutes, 
                    and the quality exceeded my expectations. Will definitely order again."</p>
                <h3>Cloudy <span>Rock</span></h3>
                </div>
            </div>
            <div className="customer-box-content">
               <div className="left-content">
                <img src={clientReviewTwo} alt="client review two" />
               </div>
               <div className="right-content">
                 <span className="star">★★★★☆</span>
                <p>"Great overall experience and very reliable. Shipping took a day longer than expected, 
                    but customer support was helpful and the product works smoothly."</p>
                <h3>Smith <span>Jack</span></h3>
               </div>
            </div>
            <div className="customer-box-content">
                <div className="left-content">
                    <img src={clientReviewThree} alt="client review three" />
                </div>
                <div className="right-content">
                    <span className="star">★★★★☆</span>
                <p>"Super easy to use and well worth the price.
                     Highly recommend to anyone on the fence!"</p>
                <h3>Jems <span>Bond</span></h3>
                </div>
            </div>
        </div>
      </div>
        </section>
    </main>
    </>
  )
}

export default CustomerReview