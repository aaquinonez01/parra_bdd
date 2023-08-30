import { useForm } from "../../../../../hooks/useForm";

export const ProfesorFormModal = ({ closeModal, handleProfesorData }) => {
  const { formState, onInputChange } = useForm({
    nombreProfesor: "",
    apellidoProfesor: "",
    identificacionProfesor: "",
    emailProfesor: "",
    profesionProfesor: "",
    direccionProfesor: "",
    telefonoProfesor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfesorData(formState);
    closeModal();
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Profesor</h2>
        <form
          className="grid grid-cols-2 items-center gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nombre</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Nombre"
              name="nombreProfesor"
              value={formState.nombreProfesor}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Apellido</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Apellido"
              name="apellidoProfesor"
              value={formState.apellidoProfesor}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Cedula</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Cedula"
              name="identificacionProfesor"
              value={formState.identificacionProfesor}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Correo</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Correo"
              name="emailProfesor"
              value={formState.emailProfesor}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Telefono</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Telefono"
              name="telefonoProfesor"
              value={formState.telefonoProfesor}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-bold">Profesion</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Profesion"
              name="profesionProfesor"
              value={formState.profesionProfesor}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-sm font-bold">Direccion</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Direccion"
              name="direccionProfesor"
              value={formState.direccionProfesor}
              onChange={onInputChange}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2">
            Agregar Profesor
          </button>
        </form>
      </div>
    </div>
  );
};
