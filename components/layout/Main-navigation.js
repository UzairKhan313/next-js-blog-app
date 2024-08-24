import Link from "next/link";
import Logo from "./Logo";
import classses from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classses.header}>
      <Link href="/">
        {/* <a> */}
        <Logo />
        {/* </a> */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Post</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
