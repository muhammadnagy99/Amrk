import {remark} from "remark";
import remarkHtml from "remark-html";

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
};


export async function getPostMarkdownContent(postId: number, lang: string): Promise<string> {
    try {
      // Adjust the path to your actual markdown files
      const content = await import(`@/src/data/blog/p${postId}_${lang}.md`);
      return content.default; // Assuming the markdown file exports its content as the default export
    } catch (error) {
      console.error("Error fetching Markdown content:", error);
      throw new Error("Could not fetch the markdown content");
    }
}
