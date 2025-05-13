import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";

import { Navbar, CalendarEvent } from "../";
import { localizer, getMessagesES } from "../../helpers";

const myPropsEvent = [
  {
    title: "Cumpleaños del Jefe",
    notes: "Hay que comprar pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    borderColor: "#009dff",
    user: {
      id: 1,
      name: "Jorge Arias",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347cf7",
      borderColor: "#333",
      borderRadius: "0px",
      opacity: 0.8,
      color: "#fff",
    };

    return { style };
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es-ES"
        messages={getMessagesES()}
        localizer={localizer}
        events={myPropsEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};
