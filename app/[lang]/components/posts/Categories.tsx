import Link from "next/link";

export default function Categories({ categories }: any) {
  return (
    <span className="ml-1 flex justify-start mb-8 text-sm mx-0 sm:mx-8 md:mx-16">
      {categories.edges.length > 0 ? (
        categories.edges.map((category: any, index: any) => (
          <Link
            className="hover:underline inline-block bg-gray-200 rounded-full px-2 py-1 mr-2"
            key={index}
            href={`/categories/${category.node.slug}`}
          >
            {category.node.name}
          </Link>
        ))
      ) : (
        <span className="ml-1">{categories.edges.node.name}</span>
      )}
    </span>
  );
}
