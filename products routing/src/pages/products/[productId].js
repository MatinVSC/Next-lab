
export async function getServerSideProps(context) {
    const { productId } = context.params;

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        if (!response.ok) {
            // اگر کد وضعیت 500 باشد، به صفحه 404 ریدایرکت می‌کند
            if (response.status === 500) {
                return {
                    redirect: {
                        destination: '/404',
                        permanent: false,
                    },
                };
            }
        }

        const data = await response.json();

        return {
            props: { products: data },
        }

    } catch (error) {
        // در صورت بروز خطا، به صفحه 404 ریدایرکت می‌کند
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            }, 
        };
    }

}

export default function ProductDetails({ products }) {

    return (
        <>
            <h1>{products.title}</h1>
            <img width={200} src={products.image} />
            <p>{products.description}</p>
            <span>price: {products.price}</span>
        </>
    )
}
