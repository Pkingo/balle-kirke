import { CalendarEvent } from "~/types/Event";
import { formatDate } from "~/utils/date";

type Props = {
  events: CalendarEvent[];
};

const CalendarItem: React.FC<CalendarEvent> = ({
  title,
  startTime,
  endTime,
}) => (
  <div className="flex gap-4">
    <div className="w-20 h-20 bg-green-main text-white justify-center flex items-center rounded font-bold">
      {formatDate(startTime, "short-date")}
    </div>
    <div className="flex justify-center flex-col w-56">
      <p>
        KL. {formatDate(startTime, "time")}
        {endTime ? `  - ${formatDate(endTime, "time")}` : null}
      </p>
      <p>{title}</p>
    </div>
  </div>
);

export const Calendar: React.FC<Props> = ({ events }) => (
  <div className="mx-auto lg:mx-0">
    <h3 className="text-green-main">Det sker i Valgmenigheden</h3>
    <div className="flex flex-col gap-4 pt-6">
      {events.map((event) => (
        <CalendarItem key={event.id} {...event} />
      ))}
    </div>
  </div>
);
