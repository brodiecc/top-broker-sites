import Container from "./components/Container";
import MoreStories from "./components/MoreStories";
import { getLatestPosts } from "./lib/api";

export default async function NotFound() {
  const latestPosts = await getPosts();

  return (
    <div>
      <Container className="flex justify-center align-middle my-24 flex-col text-center">
        <h2 className="text-4xl my-8 font-bold">
          Oops... This page doesn&apos;t exist.
        </h2>
        <p className="text-lg">Try one of these:</p>
      </Container>

      <MoreStories posts={latestPosts} lang="en" />
    </div>
  );
}

async function getPosts() {
  const latestPosts = await getLatestPosts(3, "en");

  return latestPosts;
}
