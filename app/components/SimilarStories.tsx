import PostPreview from "./previews/PostPreview";

type Post = {
  slug: string;
  author: any;
  title: string;
  featuredImage: any;
  date: string;
  excerpt: string;
  categories: any;
};

type Props = {
  posts: {
    node: Post;
  }[];
};

export default function SimilarStories({ posts }: Props) {
  return (
    <div className="bg-white pb-24 sm:pb-32 sm:mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl">
            Similar Articles
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              author={node.author}
              coverImage={node.featuredImage}
              date={node.date}
              categories={node.categories.edges[0].node}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
