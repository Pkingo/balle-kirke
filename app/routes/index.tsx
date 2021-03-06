import { LoaderFunction, useLoaderData } from "remix";
import { FrontPageEvent } from "~/types/Event";
import { formatDate } from "~/utils/date";
import { getEvents } from "~/utils/getEvents.server";
import Markdown from "markdown-to-jsx";
import { MarkdownOptions } from "~/components/markdown";
import { PageHeader } from "~/components/PageHeader";

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

export const Event: React.FC<FrontPageEvent> = ({ title, body, written }) => (
  <div className="flex flex-col gap-2">
    <PageHeader>{title}</PageHeader>
    <Markdown options={MarkdownOptions}>{body}</Markdown>
    <p className="italic">Skrevet d. {formatDate(written)}</p>
  </div>
);
