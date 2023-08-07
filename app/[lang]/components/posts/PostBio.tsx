import { parseISO, format } from "date-fns";
import Image from "next/image";

export default function PostBio({ author, dateString }: any) {
  const date = parseISO(dateString);

  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between p-2 ">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="w-8 h-8 relative mr-2">
          <Image
            src={author.node.avatar.url}
            fill={true}
            sizes="48px"
            className="rounded-full"
            alt={name}
          />
        </div>
        <span className="text-sm text-gray-900 mr-2">{name}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-2">
        <span className="hidden md:inline">|</span>
        <time
          className="text-sm text-gray-600 mb-4 md:mb-0"
          dateTime={dateString}
        >
          {format(date, "LLLL d, yyyy")}
        </time>
      </div>
    </div>
  );
}
