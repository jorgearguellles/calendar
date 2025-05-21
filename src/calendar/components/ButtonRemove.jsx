import { useCalendarStore, useUIStore } from "../../hooks";

export const ButtonRemove = () => {
  const { isDateModalOpen } = useUIStore();
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  };

  const handleStyle = () => {
    if (isDateModalOpen) {
      return "none";
    }
    if (hasEventSelected) {
      return "";
    }
    return "none";
  };

  return (
    <button
      className="btn btn-danger btn-danger-custom"
      onClick={handleDelete}
      style={{ display: handleStyle() }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
