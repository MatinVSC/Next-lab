const SingleProductPage = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
      <img width={200} src={product.image} />
      <p>{product.description}</p>
      <h4>price: {product.price}</h4>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${context.query.id}`
    );
    const data = await response.json();

    return {
      props: {
        product: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
export default SingleProductPage;
