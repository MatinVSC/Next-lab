import { useRouter } from "next/router";

const SinglePostPage = ({ post }) => {
  console.log({ post });

  const router = useRouter();
  console.log("FALBBACK::::");
  
  if (router.isFallback) return <h1>LOADING...</h1>;
  return (
    <>
      <span>id: {post?.id} </span>
      <h1>{post?.title}</h1>
      <span>user id: {post?.userId} </span>
      <p>{post?.body}</p>
    </>
  );
};

export async function getStaticPaths(params) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts = await response.json();

  const pages = allPosts.slice(0, allPosts.length / 2).map((post) => {
    return { params: { id: String(post.id) } };
  });
  //   const pages = [
  //     { params: { id: "1" } },
  //     { params: { id: "2" } },
  //     { params: { id: "3" } },
  //   ];

  return {
    paths: pages,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await response.json();

    return {
      props: {
        post: data,
      }
    };
  } catch (err) {
    console.log(err);
  }
}

export default SinglePostPage;
