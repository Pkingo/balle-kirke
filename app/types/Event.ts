export type CalendarEvent = {
  id: string;
  startTime: number;
  endTime?: number;
  title: string;
};

export type FrontPageEvent = {
  slug: string;
  title: string;
  date?: number;
  body: string;
  written: number;
};
