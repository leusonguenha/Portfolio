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
              Home
            </a>
          </li>
          <li>
            <a href="/blog" className="menu-btn">
              Blog
            </a>
          </li>
          <li>
            <a href="/about" className="menu-btn">
              About
            </a>
          </li>
        </ul>
        <div className="menu-btn">Menu</div>
      </div>
    </nav>
  </div>
);

export default Menu;
