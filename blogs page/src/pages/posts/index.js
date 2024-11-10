import AddDataButton from "@/components/dataHandler/addDataButton";
import { useState } from "react";

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

const PostsPage = ({ posts }) => {
  const [newData, setNewData] = useState(posts);

  const handelDataUpdate = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const updateData = await response.json();
    setNewData(prevData => [...prevData, ...updateData]);
  }
  
  return (
    <>
      <h1>ALL POSTS</h1>
      {newData.map((post, index) => {
        return (
          <section key={index}>
            <div className="post">
            <span>id: {post.id}</span>
            <h2>{post.title}</h2>
            <span>author: {post.userId}</span>
          </div>
          <div>
          <span>id: {post?.name}</span>
            <h2>{post?.email}</h2>
            <span>author: {post?.phone}</span>
          </div>
          </section>
        );
      })}
      <AddDataButton onSuccess={handelDataUpdate} />
    </>
  );
};


export default PostsPage;
