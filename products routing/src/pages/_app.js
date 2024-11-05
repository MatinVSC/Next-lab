import Layout from "@/components/Layout";
import ProductsLayout from "@/components/ProductsLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

const ProductLayoutPages = ["/products", "/about"];

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const LayoutComponent = ProductLayoutPages.includes(pathname)
    ? ProductsLayout
    : Layout;

  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}