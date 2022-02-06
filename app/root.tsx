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
import {
  MenuContextProps,
  MenuProvider,
} from "~/components/contexts/MenuContext";
import { getAboutConstituencyPages } from "~/utils/getAboutConstituency.server";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: globalStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Balle Valgmenighed" };
};

type LoaderData = MenuContextProps & {
  calendarEvents: CalendarEvent[];
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const calendarEvents = await getCalendarEvents();
  const about = await (
    await getAboutConstituencyPages()
  ).map(({ body, ...event }) => event);
  return { calendarEvents, about };
};

export default function App() {
  const { calendarEvents, ...rest } = useLoaderData<LoaderData>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MenuProvider {...rest}>
          <Layout>
            <Outlet />
            <Calendar events={calendarEvents} />
          </Layout>
        </MenuProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
