import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <label htmlFor="menu-toggle" className="menu-btn">&#9776;</label>
      <input type="checkbox" id="menu-toggle" />

      <div className="navbar-right">
        <Link href="#">
          <span>&#127760; United States</span>
        </Link>
        <Link href="#">Trip Boards</Link>
        <Link href="#">List your property</Link>
        <Link href="#">Help</Link>
        <Link href="#">My trips</Link>
        <Link href="#">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;