import { useUIStore, useCalendarStore } from "../../hooks";
import { addHours } from "date-fns";

export const ButtonAddNew = () => {
  const { toggleDateModal } = useUIStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent(null);
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Juan",
      },
    });
    toggleDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
