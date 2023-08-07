import Image from "next/image";

export default function PostImage({ title, coverImage }: any) {
  if (!coverImage?.node) return null;
  return (
    <Image
      width={coverImage.node.mediaDetails.width || 1000}
      height={coverImage.node.mediaDetails.height || 500}
      alt={coverImage.node.altText || title}
      src={coverImage?.node.sourceUrl}
      className="w-full rounded-lg bg-gray-100 object-cover aspect-video"
    />
  );
}
