import "./MainPage.css";
import a from "../img/a.jpg";
import { Header } from "../components/Header/Header";
import { ReadMoreBtn } from "../components/Btn/Btn";
import { SideBar } from "../components/SideBar/SideBar";
import {
  ScrollPanel,
  EditorPanel,
} from "../components/ScrollPanel/ScrollPanel";
import { CollectionCards } from "../components/Cards/Cards";
import { SubscribeForm } from "../components/Form/Form";
import { Footer } from "../components/Footer/Footer";

export const MainPage = () => {
  return (
    <>
      <section className="hero-section">
        <Header />
        <div className="hero-container">
          <h1 className="hero-title">The Walchen Lake</h1>
          <p className="hero-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            perspiciatis hic esse. Quasi incidunt explicabo numquam at omnis
            magni, fugit eveniet mollitia quas vitae accusamus praesentium ab
            reiciendis cum atque?
          </p>
          <ReadMoreBtn />
        </div>
        <SideBar />
      </section>

      <section className="featured-section">
        <aside className="featured-section-aside">
          <h2 className="featured-section-title">Featured spots</h2>
          <p className="featured-section-text">
            Consequuntur eum alias quisquam dicta nihil ut.
          </p>
          <a className="featured-section-link" href="/">
            View all
          </a>
        </aside>
        <ScrollPanel />
      </section>

      <section className="about-section">
        <img className="about-section-img" src={a} alt="Nature" />
        <div>
          <h2 className="about-section-title">Above the sky</h2>
          <i className="about-section-text">
            "Nostrum dignissimos doloremque ipsam rerum commodi dolore tempore
            distinctio? Vel ullam nihil aliquam minima quam."
          </i>
          <p className="about-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            quibusdam alias iusto distinctio et rerum nisi quaerat molestiae
            pariatur, in aut esse sunt voluptates repellat dolore sapiente
            mollitia ad ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed quibusdam alias iusto distinctio et rerum nisi
            quaerat molestiae pariatur, in aut esse sunt voluptates repellat
            dolore sapiente mollitia ad ipsum.
          </p>
        </div>
      </section>

      <section className="editor-section">
        <aside className="featured-section-aside">
          <h2 className="featured-section-title">Editor's pick</h2>
          <p className="featured-section-text">
            Consequuntur eum alias quisquam dicta nihil ut.
          </p>
        </aside>
        <EditorPanel />
      </section>

      <section className="collections-section">
        <h2 className="collections-section-title">Mountains collection</h2>
        <p className="collections-section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae
          hic doloribus id, fuga repellendus aliquam, autem, earum sit soluta
          delectus cupiditate eveniet eum incidunt amet cum. Unde, fugiat
          commodi?
        </p>
        <CollectionCards />
      </section>

      <section className="subscribe-section">
        <div className="subscribe-section-box">
          <h3 className="subscribe-section-title">
            Subscribe for super photos
          </h3>
          <SubscribeForm />
        </div>
      </section>
      <Footer />
    </>
  );
};
