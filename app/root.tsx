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
import type { MetaFunction } from "remix";

import tailwindStyles from "./styles/tailwind.css";
import globalStyles from "./styles/global.css";
import { Layout } from "~/components/Layout";
import { Calendar } from "~/components/Calendar";
import { CalendarEvent } from "~/types/Event";
import { getCalendarEvents } from "~/utils/getCalendarEvents";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: globalStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Balle Valgmenighed" };
};

export const loader: LoaderFunction = () => {
  return getCalendarEvents();
};

export default function App() {
  const data = useLoaderData<CalendarEvent[]>();
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
