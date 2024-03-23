import Link from "next/link";

const Menu = () => (
  <div>
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href="/">criandodevs</a>
        </div>
        <ul className="menu">
          <li>
            <a href="/" className="menu-btn">
              home
            </a>
          </li>
          <li>
            <a href="/blog" className="menu-btn">
              blog
            </a>
          </li>
          <li>
            <a href="/portfolio" className="menu-btn">
              portfólio
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  </div>
);

export default Menu;
