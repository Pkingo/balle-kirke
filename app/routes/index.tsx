import faker from "faker";
import { LoaderFunction, useLoaderData } from "remix";
import { formatDate } from "~/utils/date";

type Event = {
  id: string;
  title: string;
  date: number;
  text: string;
  createdAt: number;
};

export const loader: LoaderFunction = () => {
  const events = Array.from({ length: 10 }).map((_, i) => ({
    id: faker.datatype.uuid(),
    date: faker.date.future().getTime(),
    title: faker.lorem.sentence(),
    text: faker.lorem.paragraph(),
    createdAt: faker.date.past().getTime(),
  }));

  return events;
};

export default function Index() {
  const data = useLoaderData<Event[]>();
  return (
    <div>
      {data.map(({ id, ...event }) => (
        <Event key={id} {...event} />
      ))}
    </div>
  );
}

export const Event: React.FC<Omit<Event, "id">> = ({
  title,
  text,
  createdAt,
  date,
}) => (
  <div>
    <h4>{title}</h4>
    <p>{formatDate(date, "date-time")}</p>
    <p dangerouslySetInnerHTML={{ __html: text }} />
    <p>{formatDate(createdAt)}</p>
  </div>
);
