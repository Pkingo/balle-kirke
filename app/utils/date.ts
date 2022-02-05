const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
};
const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};
const DATETIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  ...TIME_FORMAT_OPTIONS,
  ...DATE_FORMAT_OPTIONS,
  month: "numeric",
};

type Format = "date" | "time" | "date-time";

const formatOptions: Record<Format, Intl.DateTimeFormatOptions> = {
  date: DATE_FORMAT_OPTIONS,
  "date-time": DATETIME_FORMAT_OPTIONS,
  time: TIME_FORMAT_OPTIONS,
};

export const formatDate = (date: number | Date, format: Format = "date") => {
  return new Intl.DateTimeFormat("da-DK", formatOptions[format]).format(date);
};
