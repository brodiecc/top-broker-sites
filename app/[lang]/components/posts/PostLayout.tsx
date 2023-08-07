import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

export default function PostLayout({ post }: any) {
  return (
    <article>
      <PostHeader
        title={post.title}
        author={post.author}
        coverImage={post.featuredImage}
        date={post.date}
        categories={post.categories}
      />
      <PostBody content={post.content} />
    </article>
  );
}
