import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { startNewNota, startUpdateNota } from "../../../../store/nota/thunks";

export const NotaFormPage = () => {
  const { id } = useParams();
  const { notas } = useSelector((state) => state.nota);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { estudiantes } = useSelector((state) => state.estudiante);
  const { materias } = useSelector((state) => state.materia);
  const [nota, setNota] = useState(notas.find((item) => item.id_note == id));
  const { formState, onInputChange } = useForm({
    idNota: nota?.id_note || "",
    primerParcial: nota?.firstPartial_note || "",
    segundoParcial: nota?.secondPartial_note || "",
    tercerParcial: nota?.thridPartial_note || "",
    idEstudiante: nota?.student_id || "",
    idMateria: nota?.subject_id || "",
  });

  useEffect(() => {
    console.log(nota);
    if (id) {
      const subject = notas.find((item) => item.id_note == id);
      setNota(subject);
    }
  }, [id, notas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formState.profesorId = parseInt(formState.profesorId);
    if (id) {
      dispatch(startUpdateNota(formState));
    } else {
      dispatch(startNewNota(formState));
    }
    navigate("/notas");
  };
  useEffect(() => {
    formState.idNota = nota?.id_note || "";
    formState.primerParcial = nota?.firstPartial_note || "";
    formState.segundoParcial = nota?.secondPartial_note || "";
    formState.tercerParcial = nota?.thridPartial_note || "";
    formState.idEstudiante = nota?.student_id || "";
    formState.idMateria = nota?.subject_id || "";
  }, [nota]);

  return (
    <div>
      <div className=" w-2/4 mx-auto flex items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Nota</h2>
        <form
          className="grid grid-cols-2 items-center gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Estudiante</label>
            <select
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Estudiante"
              name="idEstudiante"
              value={formState.idEstudiante}
              onChange={onInputChange}
            >
              <option value="">Seleccione un Estudiante</option>
              {estudiantes.map((item) => (
                <option
                  key={item.id_est}
                  value={item.id_est}
                >
                  {item.name_est} {item.lastName_est}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Materia</label>
            <select
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="idMateria"
              name="idMateria"
              value={formState.idMateria}
              onChange={onInputChange}
            >
              <option value="">Seleccione una Materia</option>
              {materias.map((item) => (
                <option
                  key={item.id_subj}
                  value={item.id_subj}
                >
                  {item.name_subj}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nota Primer Parcial</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="number"
              step={0.01}
              placeholder="Primer Parcial"
              name="primerParcial"
              value={formState.primerParcial}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nota Segundo Parcial</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="number"
              step={0.01}
              placeholder="Segundo Parcial"
              name="segundoParcial"
              value={formState.segundoParcial}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nota Tercer Parcial</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="number"
              step={0.01}
              placeholder="Tercer Parcial"
              name="tercerParcial"
              value={formState.tercerParcial}
              onChange={onInputChange}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2">
            Actualizar Nota
          </button>
        </form>
      </div>
    </div>
  );
};
