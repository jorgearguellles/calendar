import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours, format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Navbar } from "../components/Navbar";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myPropsEvent = [
  {
    title: "event 1",
    notes: "notes",
    start: new Date(),
    end: addHours(new Date(), 1),
    user: {
      id: 1,
      name: "Jorge Arias",
    },
    bgColor: "#fafafa",
    borderColor: "#009dff",
  },
];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={myPropsEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)", width: "100%" }}
      />
    </>
  );
};
