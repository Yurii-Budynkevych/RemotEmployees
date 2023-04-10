import "./Footer.css";
import socials from "../../img/svg/socials.svg";

export const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <a href="/" className="page-footer-logo">
          trppd _
        </a>
        <p>© 2017-2018</p>
        <ul className="page-footer-socials">
          <li>
            <a href="/" className="page-footer-box">
              <img
                className="icon-socials"
                src={socials}
                alt="Socialmedia icon"
              ></img>
            </a>
          </li>
          <li>
            <a href="/" className="page-footer-box">
              <img
                className="icon-socials"
                src={socials}
                alt="Socialmedia icon"
              ></img>
            </a>
          </li>
          <li>
            <a href="/" className="page-footer-box">
              <img
                className="icon-socials"
                src={socials}
                alt="Socialmedia icon"
              ></img>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
