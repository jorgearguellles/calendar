import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar, CalendarEvent, CalendarModal, ButtonAddNew } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState, useEffect } from "react";
import { useUIStore, useAuthStore } from "../../hooks";
import { useCalendarStore } from "../../hooks";
import { ButtonRemove } from "../components/ButtonRemove";

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const { toggleDateModal } = useUIStore();

  const eventStyleGetter = (event) => {
    // const isMyEvent = event.user._id === user.id || event.user._id === user.userId;

    const style = {
      backgroundColor: "#347cf7",
      borderColor: "#333",
      borderRadius: "0px",
      opacity: 0.8,
      color: "#fff",
    };

    return style;
  };
  const onDoubleClick = () => {
    toggleDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Calendar
        defaultView={lastView}
        culture="es-ES"
        messages={getMessagesES()}
        localizer={localizer}
        events={events}
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
      <ButtonAddNew />
      <ButtonRemove />
    </>
  );
};
