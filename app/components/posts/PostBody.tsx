import { id } from "date-fns/locale";
import styles from "./PostBody.module.css";
import PostNav from "./PostNav";
import { parse } from "node-html-parser";

export default function PostBody({ content }: any) {
  // Parse the HTML content to get the headings
  const bodyHtml = parse(content);
  const headings = bodyHtml.querySelectorAll("h2");
  // Add a an id to each heading equal to the text content with hyphens instead of spaces and lowercase
  headings.forEach((heading: any) => {
    heading.setAttributes({
      id: heading.innerText.toLowerCase().replace(/ /g, "-"),
    });
  });

  return (
    <div className="mx-auto flex flex-row">
      <div className="w-1/4 sticky top-0 h-screen hidden lg:block overflow-scroll">
        {/* Vertical nav menu for sections in the article */}
        <PostNav headings={headings} />
      </div>
      <div className="w-full lg:w-3/4 flex justify-center px-8 ">
        {/* Post content */}
        {/* Add the new bodyHtml with the adjusted heading ids to the post */}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: bodyHtml.toString() }}
        />
      </div>
      <div className="w-1/4 hidden lg:block"></div>
    </div>
  );
}
