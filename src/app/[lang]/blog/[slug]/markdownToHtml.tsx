import { remark } from "remark";
import remarkHtml from "remark-html";
import fs from "fs";
import path from "path";

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
};

export async function getPostMarkdownContent(
  postId: number,
  lang: string
): Promise<string> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/data/blog",
      `p${postId}_${lang}.md`
    );
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    console.error("Error fetching Markdown content:", error);
    throw new Error("Could not fetch the markdown content");
  }
}

