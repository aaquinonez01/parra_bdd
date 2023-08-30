import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import {
  startNewMateria,
  startUpdateMateria,
} from "../../../../store/materia/thunks";

export const MateriaFormPage = () => {
  const { id } = useParams();
  const { materias } = useSelector((state) => state.materia);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profesores } = useSelector((state) => state.profesor);
  const [materia, setMateria] = useState(
    materias.find((item) => item.id_subj == id)
  );
  const { formState, onInputChange } = useForm({
    idMateria: materia?.id_subj || "",
    nombreMateria: materia?.name_subj || "",
    profesorId: materia?.teacher_id || "",
  });

  useEffect(() => {
    if (id) {
      const subject = materias.find((item) => item.id_subj == id);
      setMateria(subject);
    }
  }, [id, materias]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formState.profesorId = parseInt(formState.profesorId);
    if (id) {
      dispatch(startUpdateMateria(formState));
    } else {
      dispatch(startNewMateria(formState));
    }
    navigate("/materias");
  };
  useEffect(() => {
    formState.idMateria = materia?.id_subj || "";
    formState.nombreMateria = materia?.name_subj || "";
    formState.profesorId = materia?.teacher_id || "";
  }, [materia]);

  return (
    <div>
      <div className=" w-2/4 mx-auto flex items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Materia</h2>
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
              name="nombreMateria"
              value={formState.nombreMateria}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-sm font-bold">Profesor</label>
            <select
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Profesor"
              name="profesorId"
              value={formState.profesorId}
              onChange={onInputChange}
            >
              <option value="">Seleccione un profesor</option>
              {profesores.map((item) => (
                <option
                  key={item.id_teach}
                  value={item.id_teach}
                >
                  {item.name_teach} {item.lastName_teach}
                </option>
              ))}
            </select>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2">
            {id ? "Actualizar" : "Crear"}
            Materia
          </button>
        </form>
      </div>
    </div>
  );
};
