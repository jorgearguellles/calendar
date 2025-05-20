import { useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarModal.css";
import { addHours } from "date-fns";
import es from "date-fns/locale/es";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (date, changing) => {
    setFormValues({
      ...formValues,
      [changing]: date,
    });
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group m-2 row">
          <label>Fecha y hora inicio</label>
          <DatePicker
            className="form-control"
            selected={formValues.start}
            onChange={(event) => onDateChanged(event, "start")}
            dateFormat="Pp"
            showTimeSelect={true}
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group m-2 row">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            className="form-control"
            onChange={(event) => onDateChanged(event, "end")}
            dateFormat="Pp"
            showTimeSelect={true}
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group m-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group m-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block m-2">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>{" "}
    </Modal>
  );
};
