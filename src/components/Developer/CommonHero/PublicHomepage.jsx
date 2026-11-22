import HeroImage from "../../../assets/images/Cool-Young-Man-with-RGB-Headphones.png";
import "./PublicHomepage.css";

function PublicHomepage() {
  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero-wrapper-content">

          <div className="left-content">
            <h1>
              <span className="hero-wrapper-header-slider">
                <span className="header-slider">Innovative</span>
                <span className="header-slider">Impactful</span>
                <span className="header-slider">Beautiful</span>
              </span>
            </h1>

            <h2>
              Websites for Your <br />
              Brand and business
            </h2>

            <h3>
              From design to deployment, we handle everything —
              delivering custom-built solutions that showcase your
              brand and drive results.
            </h3>

            <div className="cta-btn hero-wrapper-cta">
              <a href="shop" className="hire-me">Shop Now</a>
            </div>
          </div>

          <div className="right-content">
            <img
              className="hero-image"
              src={HeroImage}
              alt="Young man wearing headphones"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default PublicHomepage;