import { getMorePosts, getLatestPosts } from "../../lib/api";
import PostsList from "./PostsList";
import CoverImage from "../previews/CoverImage";
import Link from "next/link";
import Date from "../previews/Date";
import { socials } from "../Footer";

export default async function CategoryLayout({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const posts = await getPosts(category);
  const newposts = await getNewPosts(5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-12">
      <div className="col-span-3">
        <h1 className="text-gray-800 text-4xl  font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">
          {title}
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <PostsList posts={posts} />
      </div>
      <div className="col-span-1">
        <h2 className="my-6 text-gray-800 text-2xl  font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">
          Recent Articles
        </h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {/* Map newposts into a column of post previews with the coverImage on the left and the title and date on the right */}
        <div className="flex-col">
          {newposts.map((post: any) => (
            <>
              <div key={post.node.slug} className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-1 flex items-center rounded-full">
                  <CoverImage
                    title={post.node.title}
                    coverImage={post.node.featuredImage}
                    slug={post.node.slug}
                  />
                </div>

                <div className="flex-col col-span-3">
                  <Link href={`/${post.node.slug}`} className="hover:underline">
                    <h2 className="text-sm font-medium text-gray-900">
                      {post.node.title}
                    </h2>
                  </Link>
                  <div className="text-sm text-gray-600 mt-1">
                    <Date dateString={post.node.date} />
                  </div>
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </>
          ))}
        </div>
        <h2 className="my-6 text-gray-800 text-2xl  font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">
          Follow Us
        </h2>
        <div className="flex flex-row justify-around px-4">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getPosts(category: string) {
  const MorePosts = await getMorePosts("", category, 20);

  return MorePosts;
}

async function getNewPosts(limit: number) {
  const latestPosts = await getLatestPosts(limit);

  return latestPosts;
}
