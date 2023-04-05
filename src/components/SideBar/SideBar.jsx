import "./SideBar.css";

export const SideBar = () => {
  return (
    <aside className="side-bar">
      <ul className="side-bar-list">
        <li className="side-bar-item">Home</li>
        <li className="side-bar-item">Recommendation</li>
        <li className="side-bar-item">Explore</li>
        <li className="side-bar-item">Help</li>
        <li className="side-bar-item">About us</li>
      </ul>
    </aside>
  );
};
