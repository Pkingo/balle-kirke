import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import faker from "faker";
import type { MetaFunction } from "remix";

import tailwindStyles from "./styles/tailwind.css";
import globalStyles from "./styles/global.css";
import { Layout } from "~/components/Layout";
import { Calendar } from "~/components/Calendar";
import { TEvent } from "~/types/Event";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: globalStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const loader: LoaderFunction = () => {
  const events = Array.from({ length: 10 }).map((_, i) => ({
    id: faker.datatype.uuid(),
    date: faker.date.future().getTime(),
    title: faker.lorem.sentence(),
  }));

  return events;
};

export default function App() {
  const data = useLoaderData<TEvent[]>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <Calendar events={data} />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
