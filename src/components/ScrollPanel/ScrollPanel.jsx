import "./ScrollPanel.css";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FeaturedCards } from "../Cards/Cards";

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
      <div className="featured-section-btnBox">
        <button type="button" onClick={decr} className="featured-section-btn">
          <AiFillCaretLeft size="2em" />
        </button>
        <button type="button" onClick={incr} className="featured-section-btn">
          <AiFillCaretRight size="2em" />
        </button>
        <h3 className="featured-section-btnDescr">Outdoors edition</h3>
      </div>
      <p className="featured-section-pageCount">{pageCount}/2</p>
      {pageCount === 1 ? (
        <FeaturedCards />
      ) : (
        <div className="featured-section-error">Sorry no content here yet</div>
      )}
    </>
  );
};
