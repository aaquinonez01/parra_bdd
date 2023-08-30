import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { startUpdateProfesor } from "../../../../store/profesor/thunks";

export const ProfesorFormPage = () => {
  const { id } = useParams();
  const { profesores } = useSelector((state) => state.profesor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profesor, setProfesor] = useState(
    profesores.find((item) => item.id_teach == id)
  );
  const { formState, onInputChange } = useForm({
    idProfesor: profesor?.id_teach || "",
    nombreProfesor: profesor?.name_teach || "",
    apellidoProfesor: profesor?.lastName_teach || "",
    identificacionProfesor: profesor?.identification_teach || "",
    emailProfesor: profesor?.email_teach || "",
    profesionProfesor: profesor?.profession_teach || "",
    telefonoProfesor: profesor?.phone_teach || "",
    direccionProfesor: profesor?.address_teach || "",
  });

  useEffect(() => {
    if (id) {
      const student = profesores.find((item) => item.id_teach == id);
      setProfesor(student);
    }
  }, [id, profesores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdateProfesor(formState));
    navigate("/profesores");
  };
  useEffect(() => {
    formState.idProfesor = profesor?.id_teach || "";
    formState.nombreProfesor = profesor?.name_teach || "";
    formState.apellidoProfesor = profesor?.lastName_teach || "";
    formState.identificacionProfesor = profesor?.identification_teach || "";
    formState.emailProfesor = profesor?.email_teach || "";
    formState.profesionProfesor = profesor?.profession_teach || "";
    formState.telefonoProfesor = profesor?.phone_teach || "";
    formState.direccionProfesor = profesor?.address_teach || "";
  }, [profesor]);

  return (
    <div>
      <div className=" w-2/4 mx-auto flex items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Profesor</h2>
        <form
          className="grid grid-cols-2 items-center gap-2 w-full"
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
            Actualizar Profesor
          </button>
        </form>
      </div>
    </div>
  );
};
