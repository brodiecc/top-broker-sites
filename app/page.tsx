import Hero from "./components/Hero";
import About from "./components/About";
import MoreStories from "./components/MoreStories";
import { getLatestPosts } from "./lib/api";
import { Metadata } from "next";

export default async function Home() {
  const latestPosts = await getPosts();

  return (
    <main>
      {/* <Hero /> */}
      <About />
      <MoreStories posts={latestPosts} />
    </main>
  );
}

async function getPosts() {
  const latestPosts = await getLatestPosts(3);

  return latestPosts;
}
