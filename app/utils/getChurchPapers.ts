import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";

export async function getChurchPaper() {
  const paperPath = await fs.readdir(`${__dirname}/../content/church-paper`, {
    withFileTypes: true,
  });

  const papers = await Promise.all(
    paperPath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../content/church-paper`, dirent.name)
      );
      const { attributes } = parseFrontMatter<{
        title: string;
        file: string;
      }>(file.toString());
      return {
        slug: dirent.name.replace(/\.md/, ""),
        title: attributes.title,
        file: attributes.file,
      };
    })
  );

  return papers.reverse();
}
