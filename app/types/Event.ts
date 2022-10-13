export type CalendarEvent = {
  startTime: Date;
  endTime?: Date;
  title: string;
};

export type FrontPageEvent = {
  slug: string;
  title: string;
  body: string;
  written: number;
};
