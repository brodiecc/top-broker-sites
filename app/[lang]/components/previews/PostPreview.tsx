import CoverImage from "./CoverImage";
import Date from "./Date";
import Link from "next/link";
import Avatar from "./Avatar";

type PostPreviewProps = {
  title: string;
  author: any;
  coverImage: any;
  categories: any;
  date: string;
  excerpt: string;
  slug: string;
};

export default function PostPreview({
  title,
  coverImage,
  author,
  categories,
  date,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <article key={title} className="flex flex-col items-start">
      <div className="relative w-full">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs text-gray-600">
          <Date dateString={date} />
          <Link
            href={`/category/${categories.slug}`}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:underline"
            dangerouslySetInnerHTML={{ __html: categories.name }}
          ></Link>
        </div>
        {/* {Add div for author} */}
        <div className="mt-2 flex items-center gap-x-4 text-xs text-gray-600"></div>

        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link
              href={`/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div
            className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        </div>
        <div className="group relative mt-5">
          <Avatar author={author} />
        </div>
      </div>
    </article>
  );
}
