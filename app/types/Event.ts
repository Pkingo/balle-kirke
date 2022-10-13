export type CalendarEvent = {
  startTime: string;
  endTime?: string;
  title: string;
};

export type FrontPageEvent = {
  slug: string;
  title: string;
  body: string;
  written: number;
};
