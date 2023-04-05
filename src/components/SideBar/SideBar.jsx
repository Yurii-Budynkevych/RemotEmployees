import "./SideBar.css";

export const SideBar = () => {
  return (
    <aside className="side-bar">
      <ul className="side-bar-list">
        <li className="side-bar-item">
          <a className="side-bar-link side-bar-link__active" href="/">
            Home
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-link" href="/">
            Recommendation
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-link" href="/">
            Explore
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-link" href="/">
            Help
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-link" href="/">
            About us
          </a>
        </li>
      </ul>
    </aside>
  );
};
