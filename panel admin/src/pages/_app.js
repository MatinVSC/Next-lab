import Layout from "@/components/Layout";
import ProductsLayout from "@/components/ProductsLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { SWRConfig } from "swr";
import { logger } from "./utils/logger";

const ProductLayoutPages = ["/products", "/about"];

const fetcher = (url) => fetch(url).then(res => res.json());


export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const LayoutComponent = ProductLayoutPages.includes(pathname)
    ? ProductsLayout
    : Layout;

  return (
    <SWRConfig value={{
      fetcher,
      onSuccess: (data , key) => {
        logger({
          method: 'GET',
          endpoint: key,
          status: 'success'
        })
      },
      onError: (error, key) => {
        logger({
          method: 'GET',
          endpoint: key,
          status: 'error'
        })
      }
    }}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </SWRConfig>
  );
}
