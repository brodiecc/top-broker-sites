import PostTitle from "./PostTitle";
import PostBio from "./PostBio";
import PostImage from "./PostImage";
import Categories from "./Categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}: any) {
  return (
    <div className="max-w-6xl self-center mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="flex md:mb-8 justify-center">
        <PostBio author={author} dateString={date} />
      </div>
      <Categories categories={categories} />
      <div className="mx-0 mb-8 md:mb-16 sm:mx-8 md:mx-16 ">
        <PostImage title={title} coverImage={coverImage} />
      </div>
    </div>
  );
}
