import getManyPost from "@/app/test/service/post";

export const runtime = "edge";

const B = async () => {
  const posts = await getManyPost();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>
            {post.id} - {post.title}
          </p>
          <p>{post.author.name}</p>
        </div>
      ))}
    </div>
  );
};

export default B;
