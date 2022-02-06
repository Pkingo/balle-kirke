import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";
import { getDateFromSlug } from "~/utils/getDateFromSlug";

export async function getEvents() {
  const eventsPath = await fs.readdir(
    `${__dirname}/../../../../content/events`,
    {
      withFileTypes: true,
    }
  );

  const events = await Promise.all(
    eventsPath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../../../../content/events`, dirent.name)
      );
      const { attributes, body } = parseFrontMatter<{
        date?: Date;
        title: string;
      }>(file.toString());
      return {
        slug: dirent.name.replace(/\.md/, ""),
        title: attributes.title,
        date: attributes.date?.getTime(),
        body,
        written: getDateFromSlug(dirent.name),
      };
    })
  );

  return events;
}
