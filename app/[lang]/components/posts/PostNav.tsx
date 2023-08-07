import Link from "next/link";
import { AnimateUnderline } from "../LargeStyles";

export default function PostNav({ headings }: any) {
  //Map over the headings and create a list of links to each heading
  return (
    <nav className="mt-16 ml-1 sm:ml-4 mr-2">
      <ul>
        {headings.map((heading: any, index: any) => (
          <li key={index} className="mb-8">
            <Link
              href={`#${heading.attributes.id}`}
              className={AnimateUnderline(
                "font-bold text-gray-500 after:bg-gray-500 hover:translate-x-2 duration-200"
              )}
            >
              <span>- {heading.innerText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
