import Image from "next/image";

export default function Avatar({ author }: { author: any }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-center">
      <div className="w-8 h-8 relative mr-4">
        <Image
          src={author.node.avatar.url}
          fill={true}
          sizes="48px"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-sm text-gray-900">{name}</div>
    </div>
  );
}
