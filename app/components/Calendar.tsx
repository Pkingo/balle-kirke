import { TEvent } from "~/types/Event";
import { formatDate } from "~/utils/date";

type Props = {
  events: TEvent[];
};

const CalendarItem: React.FC<TEvent> = ({ title, date }) => (
  <div className="flex gap-4">
    <div className="w-20 bg-green-main text-white justify-center flex items-center rounded">
      {formatDate(date)}
    </div>
    <div className="w-56">
      <p>KL. {formatDate(date, "time")}</p>
      <p>{title}</p>
    </div>
  </div>
);

export const Calendar: React.FC<Props> = ({ events }) => (
  <div>
    <h4>Det sker i Valgmenigheden</h4>
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <CalendarItem key={event.id} {...event} />
      ))}
    </div>
  </div>
);
