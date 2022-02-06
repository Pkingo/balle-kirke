import { CalendarEvent } from "~/types/Event";
import { formatDate } from "~/utils/date";

type Props = {
  events: CalendarEvent[];
};

const CalendarItem: React.FC<CalendarEvent> = ({ title, date }) => (
  <div className="flex gap-4">
    <div className="w-20 h-20 bg-green-main text-white justify-center flex items-center rounded font-bold">
      {formatDate(date, "short-date")}
    </div>
    <div className="flex justify-center flex-col w-56">
      <p>KL. {formatDate(date, "time")}</p>
      <p>{title}</p>
    </div>
  </div>
);

export const Calendar: React.FC<Props> = ({ events }) => (
  <div>
    <h3 className="text-green-main">Det sker i Valgmenigheden</h3>
    <div className="flex flex-col gap-4 pt-6">
      {events.map((event) => (
        <CalendarItem key={event.id} {...event} />
      ))}
    </div>
  </div>
);
