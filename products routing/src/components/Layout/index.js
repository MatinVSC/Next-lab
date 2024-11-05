import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>MY BRAND</h1>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/about">About</Link>
          <a>Contact</a>
          <Link href="/products">products</Link>
        </nav>
      </header>
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
