import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <section className="description-container">
        <figure>
          <img src="/assets/logo/Logo.svg" alt="Digilearn" />
          <h1>Digilearn</h1>
        </figure>
        <p>
          Unlock Digital Mastery Effortlessly! Explore and enhance your skills
          with our user-friendly platform.
        </p>
      </section>
      <section className="links-container">
        <section className="quick-links">
          <h1>Quick links</h1>
          <ul>
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#our-class">Our Class</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </section>
        <section className="resources">
          <h1>Resources</h1>
          <ul>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </section>
        <section className="socials">
          <h1>Social media</h1>
          <ul>
            <li>
              <a href="">
                <img src="/assets/logo/Facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/logo/Twitter.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/logo/Instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/logo/Linkedin.svg" alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/logo/Youtube.svg" alt="Youtube" />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Footer;
