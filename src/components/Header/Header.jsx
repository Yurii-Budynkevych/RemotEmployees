import "./Header.css";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header-logo">
        <p className="page-header-logo__text">trppd _</p>
      </div>
      <ul className="page-header-list">
        <li className="page-header-item">
          <a className="page-header-link" href="/">
            My Collection
          </a>
        </li>
        <li className="page-header-item">
          <a className="page-header-link" href="/">
            Gila Bumbudi
          </a>
        </li>
      </ul>
    </header>
  );
};
