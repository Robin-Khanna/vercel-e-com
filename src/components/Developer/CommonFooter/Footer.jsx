import "./Footer.css"
import "../../../styles/global.css"


import bestPriceImg from '../../../assets/images/best-price.png';
import easyReturnImg from '../../../assets/images/easy-return.png';
import exclusiveDealsImg from '../../../assets/images/exclusive-deals.png';
import freeShippingImg from '../../../assets/images/free-shipping.png';
import originalProductsImg from '../../../assets/images/orginal-products.png';
import safeSecureImg from '../../../assets/images/safe-secure.png';
import securePaymentImg from '../../../assets/images/secure-payment.png';
import supportImg from '../../../assets/images/support.png';
import visaImg from '../../../assets/images/visa.png';
import paypalImg from '../../../assets/images/paypal.png';
import mastercardImg from '../../../assets/images/mastercard.png';



function Footer() {
  return (
    <>
    <main>
        <section className="our-action-section" id="">
  <div className="hr-line" />
  <div className="container">
    <div className="our-action">
      <div className="our-action-box">
        <div className="our-action-image">
          <img src={freeShippingImg} alt="free Shipping" />
        </div>
        <div className="our-action-content">
          <h1>Free Shipping</h1>
          <p>On orders over $50</p>
        </div>
      </div>
      <div className="vr-line"></div>
      <div className="our-action-box">
        <div className="our-action-image">
          <img src={securePaymentImg} alt="secure payment" />
        </div>
        <div className="our-action-content">
          <h1>Secure Payment</h1>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className="vr-line"></div>
      <div className="our-action-box">
        <div className="our-action-image">
          <img src={easyReturnImg} alt="easy return" />
        </div>
        <div className="our-action-content">
          <h1>Easy Returns</h1>
          <p>30-day Return policy</p>
        </div>
      </div>
      <div className="vr-line"></div>
      <div className="our-action-box">
        <div className="our-action-image">
          <img src={supportImg} alt="support" />
        </div>
        <div className="our-action-content">
          <h1>24/7 Support</h1>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
    <footer className="footer" id="footer">
  <div className="hr-line" />
  <div className="container">
    <div className="footer-top">
      <div className="footer-top-content-link">
        <h1>Shop</h1>
        <p>
          Your one-stop destination for the latest trends in fashion,
          electronics, home essentials and more{" "}
        </p>
        <div className="footer-inks">
          <ul>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-square-facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="vr-line" />
      <div className="footer-top-content-shop">
        <h1>SHOP</h1>
        <div className="footre-shop">
          <ul>
            <li>
              <a href="">All Products</a>
            </li>
            <li>
              <a href="">New Arrivals</a>
            </li>
            <li>
              <a href="">Best Sellers</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Home &amp; Living</a>
            </li>
            <li>
              <a href="">Beauty</a>
            </li>
            <li>
              <a href="">Sports</a>
            </li>
            <li>
              <a href="">Sale</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="vr-line" />
      <div className="footer-top-content-customecare">
        <h1>CUSTOME CARE</h1>
        <div className="footer-customecare">
          <ul>
            <li>
              <a href="">Track Orders</a>
            </li>
            <li>
              <a href="">Returns &amp; Refunds</a>
            </li>
            <li>
              <a href="">Shipping &amp; Information</a>
            </li>
            <li>
              <a href="">FAQS</a>
            </li>
            <li>
              <a href="">Size Guide</a>
            </li>
            <li>
              <a href="">Payment Methods</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Help &amp; Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="vr-line" />
      <div className="footer-top-content-company">
        <h1>COMPANY</h1>
        <div className="footer-company">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="">Privecy Policy</a>
            </li>
            <li>
              <a href="">Affiliate Program</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="vr-line" />
      <div className="footer-top-content-newsletter">
        <h1>NEWSLETTER</h1>
        <p>
          Subscribe to get special offers free giveaways, and once-in-a-lifetime
          deals.
        </p>
        <div className="footer-newsletter">
          <form className="footer-newsletter">
            <div className="footer-parent-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required=""
              />
              <button className="footer-child-btn" type="submit">
                Submit
              </button>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" required="" />I agree to the Terms &amp;
                Conditions
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="hr-line" />
    <div className="footer-middle">
      <div className="our-action">
        <div className="our-action-box">
          <div className="our-action-image">
            <img
              src={originalProductsImg}
              alt="orginal products"
            />
          </div>
          <div className="our-action-content">
            <h1>100% Orginal Products</h1>
            <p>Authentic &amp; quality products</p>
          </div>
        </div>
        <div className="vr-line"></div>
        <div className="our-action-box">
          <div className="our-action-image">
            <img src={bestPriceImg} alt="best price" />
          </div>
          <div className="our-action-content">
            <h1>Best Price guarantee</h1>
            <p>Get the best price always</p>
          </div>
        </div>
        <div className="vr-line"></div>
        <div className="our-action-box">
          <div className="our-action-image">
            <img src={safeSecureImg} alt="safe secure" />
          </div>
          <div className="our-action-content">
            <h1>Safe &amp; Secure Shopping</h1>
            <p>Trusted by thousands</p>
          </div>
        </div>
        <div className="vr-line"></div>
        <div className="our-action-box">
          <div className="our-action-image">
            <img src={exclusiveDealsImg} alt="exclusive deals" />
          </div>
          <div className="our-action-content">
            <h1>Exclusive Deals</h1>
            <p>Offers you can't miss</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="hr-line" />
    <div className="footer-licence"></div>
  </div>
  <div className="hr-line" />
  <div className="container">
    <div className="footer-end-content">
      <p>© 2024 SHOP. All rights reserved.</p>
      <p>Terms &amp; Conditions</p>
      <p>Privacy Policy</p>
      <p>Sitemap</p>
      <div className="footer-payment-option">
        <a href="#">
          <img src={visaImg} alt="visa" />
        </a>
        <a href="#">
          <img src={paypalImg} alt="payPal" />
        </a>
        <a href="#">
          <img src={mastercardImg} alt="mastercard" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer