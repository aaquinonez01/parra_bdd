import { useForm } from "../../../../../hooks/useForm";

export const EstudianteFormModal = ({ handleEstudianteData, closeModal }) => {
  const { formState, onInputChange } = useForm({
    nombreEstudiante: "",
    apellidoEstudiante: "",
    identificacionEstudiante: "",
    emailEstudiante: "",
    fechaNacimientoEstudiante: "",
    telefonoEstudiante: "",
    direccionEstudiante: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEstudianteData(formState);
    closeModal();
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Estudiante</h2>
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
              name="nombreEstudiante"
              value={formState.nombreEstudiante}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Apellido</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Apellido"
              name="apellidoEstudiante"
              value={formState.apellidoEstudiante}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Cedula</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Cedula"
              name="identificacionEstudiante"
              value={formState.identificacionEstudiante}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Correo</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Correo"
              name="emailEstudiante"
              value={formState.emailEstudiante}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Telefono</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Telefono"
              name="telefonoEstudiante"
              value={formState.telefonoEstudiante}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-bold">Fecha de Nacimiento</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="date"
              placeholder="Fecha de Nacimiento"
              name="fechaNacimientoEstudiante"
              value={formState.fechaNacimientoEstudiante}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-sm font-bold">Direccion</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Direccion"
              name="direccionEstudiante"
              value={formState.direccionEstudiante}
              onChange={onInputChange}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2">
            Agregar Estudiante
          </button>
        </form>
      </div>
    </div>
  );
};
