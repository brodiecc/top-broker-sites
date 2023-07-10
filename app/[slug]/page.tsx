import PostLayout from "../components/posts/PostLayout";
import { Metadata, ResolvingMetadata } from "next";
import { getAllSlugs, getPostAndMorePosts } from "../lib/api";
import MoreStories from "../components/MoreStories";
import { getPosts } from "../page";
import Container from "../components/Container";

export default async function Post({ params }: any) {
  const { post, posts } = await getPost({ params });

  return (
    <main>
      <div className="my-24 mx-auto sm:px-6 md:px-0">
        <PostLayout post={post} />
      </div>
    </main>
  );
}

function stripHTML(myString: string) {
  return myString.replace(/(<([^>]+)>)/gi, "");
}

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const data = await getPostAndMorePosts(params?.slug);
  const post = data.post;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: stripHTML(post.excerpt),
    openGraph: {
      images: [post.featuredImage?.node.sourceUrl, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllSlugs();

  return posts.edges.map((edge: any) => ({
    slug: edge.node.slug,
  }));
}

async function getPost({ params }: any) {
  const data = await getPostAndMorePosts(params?.slug);

  return {
    post: data.post,
    posts: data.posts,
  };
}

export const dynamicParams = false;
