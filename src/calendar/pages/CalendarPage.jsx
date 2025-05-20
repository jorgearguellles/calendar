import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";

import { Navbar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUIStore } from "../../hooks";
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
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const { toggleDateModal } = useUIStore();

  const eventStyleGetter = () => {
    const style = {
      backgroundColor: "#347cf7",
      borderColor: "#333",
      borderRadius: "0px",
      opacity: 0.8,
      color: "#fff",
    };

    return { style };
  };

  const onDoubleClick = () => {
    toggleDateModal();
  };

  const onSelect = (event) => {
    console.log({ Select: event });
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        defaultView={lastView}
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
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
