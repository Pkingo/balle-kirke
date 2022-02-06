import faker from "faker";

export const getCalendarEvents = () => {
  const events = [
    {
      id: faker.datatype.uuid(),
      title: "Foredrag med Bertel Haarder i Forsamlingshuset.",
      startTime: new Date(2022, 1, 10, 19, 0, 0).getTime(),
      endTime: new Date(2022, 1, 10, 21, 0, 0).getTime(),
    },
    {
      id: faker.datatype.uuid(),
      title: "Filmaften: Rød",
      startTime: new Date(2022, 1, 24, 19, 0, 0).getTime(),
      endTime: new Date(2022, 1, 24, 21, 0, 0).getTime(),
    },
    {
      id: faker.datatype.uuid(),
      title: "Generalforsamling",
      startTime: new Date(2022, 2, 22, 19, 0, 0).getTime(),
      endTime: new Date(2022, 2, 22, 21, 0, 0).getTime(),
    },
    {
      id: faker.datatype.uuid(),
      title: "GESTAPOS FANGELEJRE I DANMARK – foredrag",
      startTime: new Date(2022, 2, 30, 19, 0, 0).getTime(),
      endTime: new Date(2022, 2, 30, 21, 0, 0).getTime(),
    },
    {
      id: faker.datatype.uuid(),
      title: "Stiftelsesfest",
      startTime: new Date(2022, 3, 26, 19, 0, 0).getTime(),
      endTime: new Date(2022, 3, 26, 21, 0, 0).getTime(),
    },
  ];
  return events;
};
