import Link from "next/link";

const ProductsLayout = ({ children }) => {
  return (
    <>
      <header className="product-header">
        <div>
          <h1>Products</h1>
          <nav>
            <Link href="/">Electronics</Link>
            <Link href="/about">Jewelary</Link>
            <Link href="/about">Men's Clothing</Link>
            <Link href="/products">Women's Clothing</Link>
          </nav>
        </div>
        <Link className="home-btn" href="/">
          Homepage
        </Link>
      </header>
      <div className="container">{children}</div>
    </>
  );
};

export default ProductsLayout;
