import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";

export async function getSignupPage() {
  const filePath = await fs.readFile(
    path.join(`${__dirname}/../content/signup/index.md`)
  );
  const { attributes, body } = parseFrontMatter<{
    title: string;
  }>(filePath.toString());
  return {
    title: attributes.title,
    body,
  };
}
