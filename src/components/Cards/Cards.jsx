import "./Cards.css";
import q from "../../img/q.jpg";
import w from "../../img/w.jpg";
import e from "../../img/e.jpg";

export const FeaturedCards = () => {
  return (
    <>
      <ul className="featured-cards-list">
        <li className="featured-cards-item">
          <img
            // srcset=""
            className="featured-cards-img"
            src={q}
            alt="Nature"
          />

          <h4 className="featured-cards-subtitle">Ollalnalla</h4>
          <p className="featured-cards-text">Peru</p>
          <p className="featured-cards-subtext">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus repellat iure dicta, consequatur esse laudantium quo
            quis at exercitationem ex illo pariatur cumque aliquam, deserunt
            animi?
          </p>
          <a className="featured-cards-link" href="/">
            Read more
          </a>
        </li>
        <li className="featured-cards-item">
          <img
            // srcset=""
            className="featured-cards-img"
            src={w}
            alt="Nature"
          />

          <h4 className="featured-cards-subtitle">Burgundia</h4>
          <p className="featured-cards-text">France</p>
          <p className="featured-cards-subtext">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus repellat iure dicta, consequatur esse laudantium quo
            quis at exercitationem ex illo pariatur cumque aliquam, deserunt
            animi?
          </p>
          <a className="featured-cards-link" href="/">
            Read more
          </a>
        </li>
        <li className="featured-cards-item">
          <img
            // srcset=""
            className="featured-cards-img"
            src={e}
            alt="Nature"
          />
          <h4 className="featured-cards-subtitle">Alpine</h4>
          <p className="featured-cards-text">Italy</p>
          <p className="featured-cards-subtext">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus repellat iure dicta, consequatur esse laudantium quo
            quis at exercitationem ex illo pariatur cumque aliquam, deserunt
            animi?
          </p>
          <a className="featured-cards-link" href="/">
            Read more
          </a>
        </li>
      </ul>
    </>
  );
};
