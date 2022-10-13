import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";
import { isPast } from "date-fns";
import { CalendarEvent } from "~/types/Event";

export const getCalendarEvents = async () => {
  const eventsPath = await fs.readdir(
    `${__dirname}/../content/calendar-events`,
    {
      withFileTypes: true,
    }
  );

  const events = await Promise.all(
    eventsPath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../content/calendar-events`, dirent.name)
      );
      const { attributes } = parseFrontMatter<{
        title: string;
        startTime: string;
        endTime: string;
      }>(file.toString());
      console.log(attributes);
      return {
        slug: dirent.name.replace(/\.md/, ""),
        title: attributes.title,
        startTime: new Date(attributes.startTime),
        endTime: new Date(attributes.endTime),
      };
    })
  );

  return events
    .filter((event) => {
      console.log(isPast(event.startTime));
      return isPast(event.startTime);
    })
    .sort((a, b) => (a.startTime > b.startTime ? 1 : -1));
};
