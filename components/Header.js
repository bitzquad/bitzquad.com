import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h2 className="nav-brand">Bitzquad</h2>
        <div>
          <Link href="/">
            <a className="nav-link">Projects</a>
          </Link>
          <Link href="">
            <a className="nav-link">Conact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
