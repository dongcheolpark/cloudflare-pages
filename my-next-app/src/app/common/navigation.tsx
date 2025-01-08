import Link from "next/link";

const Navigation = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/page1">1번</Link>
          <Link href="/page2">2번</Link>
          <Link href="/page3">3번</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
