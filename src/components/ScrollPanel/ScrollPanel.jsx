import "./ScrollPanel.css";
import { useState, useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export const ScrollPanel = () => {
  const [pageCount, setpageCount] = useState(1);

  const incr = () => {
    if (pageCount >= 2) {
      return;
    }
    setpageCount(pageCount + 1);
  };

  const decr = () => {
    if (pageCount <= 1) {
      return;
    }
    setpageCount(pageCount - 1);
  };

  return (
    <>
      <aside className="featured-section-aside">
        <h1 className="featured-section-title">Featured spots</h1>
        <p className="featured-section-text">
          Consequuntur eum alias quisquam dicta nihil ut.
        </p>
        <a className="featured-section-link" href="/">
          View all
        </a>
      </aside>
      <div className="featured-section-btnBox">
        <button type="button" onClick={decr} className="featured-section-btn">
          <AiFillCaretLeft size="2em" />
        </button>
        <button type="button" onClick={incr} className="featured-section-btn">
          <AiFillCaretRight size="2em" />
        </button>
        <h2 className="featured-section-btnDescr">Outdoors edition</h2>
      </div>
      <p className="featured-section-pageCount">{pageCount}/2</p>
    </>
  );
};
