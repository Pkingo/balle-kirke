import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";

export async function getAboutConstituencyPages() {
  const filePath = await fs.readdir(
    `${__dirname}/../content/about-constituency`,
    {
      withFileTypes: true,
    }
  );

  const pages = await Promise.all(
    filePath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../content/about-constituency`, dirent.name)
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

  return pages;
}

export async function getAboutConstituencyPage(slug: string) {
  const filePath = await fs.readFile(
    path.join(`${__dirname}/../content/about-constituency`, `${slug}.md`)
  );
  const { attributes, body } = parseFrontMatter<{
    title: string;
  }>(filePath.toString());
  return {
    slug,
    title: attributes.title,
    body,
  };
}
