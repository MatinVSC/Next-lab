import Link from "next/link";

const ProductsPage = ({ data, error }) => {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>PRODUCT LIST</h1>
      <section className="row">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>category: {item.category}</p>
            <span>{item.price}</span>
            <div className="btn">
              <Link
                href={{ pathname: "/products/[id]", query: { id: item.id } }}
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

// https://fakestoreapi.com/products

export async function getServerSideProps() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log({ error });
    // return {
    //   notFound: true,
    // };
    return {
      redirect: {
        destination: "/harja",
        permanent: false,
      },
    };
  }
}

export default ProductsPage;
