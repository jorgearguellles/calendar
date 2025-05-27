import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
} from "../store";
import { calendarAPI } from "../api";
import { convertEventsToDateEvents } from "../helpers";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      // await calendarAPI.put(`/events/${calendarEvent._id}`, calendarEvent);
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const { data } = await calendarAPI.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarAPI.get("/events");
      const events = convertEventsToDateEvents(data.events);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log("Error obteniendo eventos");
      console.log(error);
    }
  };

  return {
    // Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    // Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
