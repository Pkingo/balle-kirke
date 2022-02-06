import { LoaderFunction, useLoaderData } from "remix";
import { FrontPageEvent } from "~/types/Event";
import { formatDate } from "~/utils/date";
import { getEvents } from "~/utils/getEvents.server";
import Markdown from "markdown-to-jsx";

export const loader: LoaderFunction = async () => {
  const events = await getEvents();
  return events;
};

export default function Index() {
  const data = useLoaderData<FrontPageEvent[]>();
  return (
    <div className="flex flex-col gap-8">
      {data.map((event) => (
        <Event key={event.slug} {...event} />
      ))}
    </div>
  );
}

export const Event: React.FC<FrontPageEvent> = ({
  title,
  body,
  date,
  written,
}) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-green-main">{title}</h3>
    <p className="font-bold">Afholdes d. {formatDate(date, "date-time")}</p>
    <Markdown options={{ wrapper: "article" }}>{body}</Markdown>
    <p className="italic">Skrevet d. {formatDate(written)}</p>
  </div>
);
