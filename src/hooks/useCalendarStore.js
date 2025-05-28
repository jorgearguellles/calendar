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
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarAPI.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
      }

      const { data } = await calendarAPI.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    } catch (error) {
      console.log("Error guardando evento");
      console.log(error.response.data);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  const startDeletingEvent = async () => {
    try {
      await calendarAPI.delete(`/events/${activeEvent?.id}`);
      dispatch(onDeleteEvent(activeEvent?.id));
    } catch (error) {
      console.log(error.response?.data?.msg);
    }
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
