import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListNotas, startDeleteNota } from "../../../store/nota/thunks";
import { Table } from "../../components/Table";
import { notaColumns, notaRowIndex } from "../../utils/notas";

export const NotaMateriaPage = () => {
  const [notasMateria, setNotasMateria] = useState([]);
  const { notas } = useSelector((state) => state.nota);
  const [materia, setMateria] = useState({});
  const { materias } = useSelector((state) => state.materia);
  const { profesor } = useSelector((state) => state.profesor);
  const dispatch = useDispatch();

  const getMateriaByTeacher = () => {
    const Viewmateria = materias.find(
      (materia) => materia.teacher_id === profesor.id_teach
    );
    setMateria(Viewmateria);
  };
  const getNotasByMateria = () => {
    const notasMateria = notas.filter(
      (nota) => nota.subject_id === materia.id_subj
    );
    setNotasMateria(notasMateria);
  };

  useEffect(() => {
    dispatch(getListNotas());
    getMateriaByTeacher();
  }, [dispatch]);

  useEffect(() => {
    getNotasByMateria();
  }, [materia]);

  const handleDeleteNota = (id) => {
    dispatch(startDeleteNota(id));
  };
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          GESTION DE NOTAS DE LA MATERIA {materia.name_subj}
        </h1>
      </div>
      <div className="w-2/2 mx-4 my-12 flex flex-col gap-6">
        <div className="mx-4">
          <Link
            className="bg-green-600 py-2 rounded-md text-center text-white hover:bg-green-800 font-bold flex justify-center items-center w-2/5"
            to={"crear"}
          >
            <FontAwesomeIcon
              icon={faBook}
              className="mr-2"
            />
            <span>Registrar Nota</span>
          </Link>
        </div>
        <div className="overflow-y-auto">
          <Table
            columns={notaColumns}
            rows={notasMateria}
            indexs={notaRowIndex}
            handleDelete={handleDeleteNota}
          />
        </div>
      </div>
    </div>
  );
};
