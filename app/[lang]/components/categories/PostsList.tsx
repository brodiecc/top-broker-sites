import PostImage from "../posts/PostImage";
import Date from "../previews/Date";
import Link from "next/link";

import CoverImage from "../previews/CoverImage";

export default function PostsList({ posts, message }: any) {
  if (posts.length === 0) {
    return <div>{message}</div>;
  }

  const firstPost = posts.shift();
  return (
    <div className="flex flex-col">
      <Link
        href={`/${firstPost.node.slug}`}
        aria-label={firstPost.node.title}
        className="rounded-lg hover:border-solid hover:border-2 hover:border-gray-800 hover:m-[-2px]"
      >
        <PostImage
          title={firstPost.node.title}
          coverImage={firstPost.node.featuredImage}
        />
      </Link>

      <div className="text-sm text-gray-600 mt-4">
        <Date dateString={firstPost.node.date} />
      </div>
      <Link href={`/${firstPost.node.slug}`} className="hover:underline">
        <h2
          className="mt-4 text-2xl font-semibold leading-7 text-gray-900"
          dangerouslySetInnerHTML={{ __html: firstPost.node.title }}
        ></h2>
        <div
          className="mt-4 line-clamp-3 text-sm leading-6 text-gray-800"
          dangerouslySetInnerHTML={{ __html: firstPost.node.excerpt }}
        ></div>
      </Link>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex-col">
        {posts.map((post: any) => (
          <>
            <div key={post.node.slug} className="grid grid-cols-5 gap-4 mb-4">
              <div className="col-span-2 bg-gray-100 rounded-2xl">
                <CoverImage
                  title={post.node.title}
                  coverImage={post.node.featuredImage}
                  slug={post.node.slug}
                />
              </div>

              <div className="flex-col col-span-3">
                <Link href={`/${post.node.slug}`} className="hover:underline">
                  <h2 className="text-lg font-medium text-gray-900">
                    {post.node.title}
                  </h2>
                </Link>
                <div className="text-sm text-gray-600 mt-1">
                  <Date dateString={post.node.date} />
                </div>
                <div
                  className="mt-2 text-sm leading-6 text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                ></div>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </>
        ))}
      </div>
    </div>
  );
}
