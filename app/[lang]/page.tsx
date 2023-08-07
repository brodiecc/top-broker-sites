import Hero from "./components/Hero";
import About from "./components/About";
import MoreStories from "./components/MoreStories";
import { getLatestPosts } from "./lib/api";
import { Metadata } from "next";
import { convertIso } from "./lib/utils";
import { getDictionary } from "@/get-dictionary";

export default async function Home({ params }: { params: { lang: string } }) {
  const latestPosts = await getPosts(convertIso(params.lang));
  return (
    <main>
      {/* <Hero /> */}
      <About lang={params.lang} />
      <MoreStories posts={latestPosts} lang={params.lang} />
    </main>
  );
}

async function getPosts(lang: string) {
  const latestPosts = await getLatestPosts(3, lang);

  return latestPosts;
}
