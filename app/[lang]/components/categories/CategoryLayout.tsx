import { getMorePosts, getLatestPosts } from "../../lib/api";
import PostsList from "./PostsList";
import CoverImage from "../previews/CoverImage";
import Link from "next/link";
import Date from "../previews/Date";
import { socials } from "../Footer";
import { convertIso } from "../../lib/utils";
import { getDictionary } from "@/get-dictionary";

export default async function CategoryLayout({
  category,
  title,
  lang,
}: {
  category: string;
  title: string;
  lang: any;
}) {
  const posts = await getPosts(category, convertIso(lang));
  const newposts = await getNewPosts(5, convertIso(lang));
  const dictionary = await getDictionary(lang);

  switch (title) {
    case "Broker Reviews":
      title = dictionary.categories.learn;
      break;
    case "Trading Strategy":
      title = dictionary.categories.strategies;
      break;
    case "Broker Reviews":
      title = dictionary.categories.reviews;
      break;
    default:
      break;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-12">
      <div className="col-span-3">
        <h1 className="text-gray-800 text-4xl  font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">
          {title}
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <PostsList posts={posts} message={dictionary.categories.noPosts} />
      </div>
      <div className="col-span-1">
        <h2 className="my-6 text-gray-800 text-2xl  font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">
          {dictionary.categories.recent}
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

async function getPosts(category: string, lang: string) {
  const MorePosts = await getMorePosts("", category, 20, lang);

  return MorePosts;
}

async function getNewPosts(limit: number, lang: string) {
  const latestPosts = await getLatestPosts(limit, lang);

  return latestPosts;
}
