import '@/styles/navbar.scss';
import Link from 'next/link';

export default function Navbar () {

  return (
    <nav className="navbar">
      <Link className="nav-link" href='/'>Home</Link>
      <Link className="nav-link" href='/about'>About</Link>
      <Link className="nav-link" href='/projects'>Projects</Link>
      <Link className="nav-link" href='/contact'>Contact</Link>
    </nav>
  );
};
