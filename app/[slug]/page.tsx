import PostLayout from "../components/posts/PostLayout";
import { Metadata, ResolvingMetadata } from "next";
import {
  getAllSlugs,
  getMainPost,
  getMorePosts,
  getLatestPosts,
} from "../lib/api";
import SimilarStories from "../components/SimilarStories";

export default async function Post({ params }: any) {
  const { post, posts } = await getPost({ params });

  return (
    <main>
      <div className="my-24 mx-auto sm:px-6 md:px-0">
        <PostLayout post={post} />
        <SimilarStories posts={posts} />
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
  const data = await getMainPost(params?.slug);
  const post = data.post;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: stripHTML(post.excerpt),
    openGraph: {
      images: post.featuredImage
        ? [post.featuredImage.node.sourceUrl, ...previousImages]
        : previousImages,
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
  const postData = await getMainPost(params?.slug);

  const postsData = await getMorePosts(
    params?.slug,
    postData.post.categories.edges[0].node.name,
    3
  );

  return {
    post: postData.post,
    posts: postsData,
  };
}

export const dynamicParams = false;

async function getPosts() {
  const latestPosts = await getLatestPosts(3);

  return latestPosts;
}
