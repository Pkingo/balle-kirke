import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";

export async function getPriestBlogs() {
  const blogPath = await fs.readdir(`${__dirname}/../content/priest-blog`, {
    withFileTypes: true,
  });

  const blogs = await Promise.all(
    blogPath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../content/priest-blog`, dirent.name)
      );
      const { attributes, body } = parseFrontMatter<{
        title: string;
      }>(file.toString());
      return {
        slug: dirent.name.replace(/\.md/, ""),
        title: attributes.title,
        body,
      };
    })
  );

  return blogs.reverse();
}
