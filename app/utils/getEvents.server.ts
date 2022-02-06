import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";
import { getDateFromSlug } from "~/utils/getDateFromSlug";
import {} from "date-fns";

export async function getEvents() {
  const eventsPath = await fs.readdir(`${__dirname}/../content/events`, {
    withFileTypes: true,
  });

  const events = await Promise.all(
    eventsPath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../content/events`, dirent.name)
      );
      const { attributes, body } = parseFrontMatter<{
        title: string;
      }>(file.toString());
      return {
        slug: dirent.name.replace(/\.md/, ""),
        title: attributes.title,
        body,
        written: getDateFromSlug(dirent.name),
      };
    })
  );

  return events.sort((event1, event2) => event2.written - event1.written);
}
