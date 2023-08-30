import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { startUpdateEstudiante } from "../../../../store/estudiante/thunks";

export const EstudianteFormPage = () => {
  const { id } = useParams();
  const { estudiantes } = useSelector((state) => state.estudiante);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [estudiante, setEstudiante] = useState(
    estudiantes.find((item) => item.id_est == id)
  );
  const { formState, onInputChange } = useForm({
    idEstudiante: estudiante?.id_est || "",
    nombreEstudiante: estudiante?.name_est || "",
    apellidoEstudiante: estudiante?.lastName_est || "",
    identificacionEstudiante: estudiante?.identification_est || "",
    emailEstudiante: estudiante?.email_est || "",
    fechaNacimientoEstudiante: estudiante?.dateBirth_est || "",
    telefonoEstudiante: estudiante?.phone_est || "",
    direccionEstudiante: estudiante?.address_est || "",
  });

  useEffect(() => {
    if (id) {
      const student = estudiantes.find((item) => item.id_est == id);
      setEstudiante(student);
    }
  }, [id, estudiantes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdateEstudiante(formState));
    navigate("/estudiantes");
  };
  useEffect(() => {
    formState.idEstudiante = estudiante?.id_est || "";
    formState.nombreEstudiante = estudiante?.name_est || "";
    formState.apellidoEstudiante = estudiante?.lastName_est || "";
    formState.identificacionEstudiante = estudiante?.identification_est || "";
    formState.emailEstudiante = estudiante?.email_est || "";
    const date = new Date(estudiante?.dateBirth_est);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    formState.fechaNacimientoEstudiante = `${year}-${
      month < 10 ? "0" : ""
    }${month}-${day < 10 ? "0" : ""}${day}`;
    console.log(formState.fechaNacimientoEstudiante);
    formState.telefonoEstudiante = estudiante?.phone_est || "";
    formState.direccionEstudiante = estudiante?.address_est || "";
  }, [estudiante]);

  return (
    <div>
      <div className="flex w-2/4 mx-auto items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Estudiante</h2>
        <form
          className=" w-full grid grid-cols-2 items-center gap-2"
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
            Actualizar Estudiante
          </button>
        </form>
      </div>
    </div>
  );
};
