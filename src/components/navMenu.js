import Link from 'next/link';

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Main
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
