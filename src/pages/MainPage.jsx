import "./MainPage.css";
import { Header } from "../components/Header/Header";
import { ReadMoreBtn } from "../components/Btn/Btn";
import { SideBar } from "../components/SideBar/SideBar";

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
    </>
  );
};
