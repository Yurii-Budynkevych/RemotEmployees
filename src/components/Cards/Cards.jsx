import "./Cards.css";
import q from "../../img/q.jpg";
import w from "../../img/w.jpg";
import e from "../../img/e.jpg";
import s from "../../img/s.jpg";
import d from "../../img/d.jpg";
import f from "../../img/f.jpg";
import g from "../../img/g.jpg";
import h from "../../img/h.jpg";
import j from "../../img/j.jpg";
import { ReadMoreBtn } from "../Btn/Btn";

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

export const EditorCards = () => {
  return (
    <>
      <ul className="editor-cards-list">
        <li className="editor-cards-item">
          <div className="editor-cards-container">
            <img
              // srcset=""
              className="editor-cards-img"
              src={s}
              alt="Nature"
            />
            <div className="editor-cards-thumb">
              <h4 className="editor-cards-subtitle">Hamburg</h4>
              <p className="editor-cards-text">Germany</p>
              <p className="editor-cards-subtext">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus repellat iure dicta, consequatur esse laudantium
                deserunt animi?
              </p>
            </div>
          </div>
        </li>
        <li className="editor-cards-item">
          <div className="editor-cards-group">
            <div className="editor-cards-container with-margin">
              <img
                // srcset=""
                className="editor-cards-img"
                src={d}
                alt="Nature"
              />
              <div className="editor-cards-thumb">
                <h4 className="editor-cards-subtitle">Kyoto</h4>
                <p className="editor-cards-text">Japan</p>
                <p className="editor-cards-subtext">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="editor-cards-container">
              <img
                // srcset=""
                className="editor-cards-img"
                src={f}
                alt="Nature"
              />
              <div className="editor-cards-thumb">
                <h4 className="editor-cards-subtitle">Lviv</h4>
                <p className="editor-cards-text">Ukraine</p>
                <p className="editor-cards-subtext">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus repellat iure dicta, consequatur esse
                  laudantium deserunt animi?
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export const CollectionCards = () => {
  return (
    <>
      <ul className="collection-cards-list">
        <li className="collection-cards-item">
          <div className="collection-cards-thumb">
            <div>
              <h3 className="collection-cards-title">Vacexa Mountain</h3>
              <p className="collection-cards-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quas doloremque voluptates debitis laudantium, hic aspernatur?
                Atque adipisci nemo asperiores dolorum illum facere vitae
                commodi necessitatibus, veritatis molestias, modi reprehenderit?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                quibusdam, id odio repellat consectetur architecto velit quo
                tempora, doloribus optio cupiditate aperiam magnam. Quibusdam
                iste possimus eius repellat ab natus?
              </p>
              <ReadMoreBtn />
            </div>
            <img
              className="collection-cards-img"
              src={g}
              alt="Nature"
              width={300}
            />
          </div>
        </li>
        <li className="collection-cards-item">
          <div className="collection-cards-thumb">
            <div>
              <h3 className="collection-cards-title">Tyria Mountain</h3>
              <p className="collection-cards-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quas doloremque voluptates debitis laudantium, hic aspernatur?
                Atque adipisci nemo asperiores dolorum illum facere vitae
                commodi necessitatibus, veritatis molestias, modi reprehenderit?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                quibusdam, id odio repellat consectetur architecto velit quo
                tempora, doloribus optio cupiditate aperiam magnam. Quibusdam
                iste possimus eius repellat ab natus?
              </p>
              <ReadMoreBtn />
            </div>
            <img
              className="collection-cards-img"
              src={h}
              alt="Nature"
              width={300}
            />
          </div>
        </li>
        <li className="collection-cards-item">
          <div className="collection-cards-thumb">
            <div>
              <h3 className="collection-cards-title">Rada Mountain</h3>
              <p className="collection-cards-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quas doloremque voluptates debitis laudantium, hic aspernatur?
                Atque adipisci nemo asperiores dolorum illum facere vitae
                commodi necessitatibus, veritatis molestias, modi reprehenderit?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                quibusdam, id odio repellat consectetur architecto velit quo
                tempora, doloribus optio cupiditate aperiam magnam. Quibusdam
                iste possimus eius repellat ab natus?
              </p>
              <ReadMoreBtn />
            </div>
            <img
              className="collection-cards-img"
              src={j}
              alt="Nature"
              width={300}
            />
          </div>
        </li>
      </ul>
    </>
  );
};
