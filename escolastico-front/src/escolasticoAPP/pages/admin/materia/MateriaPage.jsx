import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../../../../components/Loading";
import {
  getListMaterias,
  startDeleteMateria,
} from "../../../../store/materia/thunks";
import { Table } from "../../../components/Table";
import { materiaColumns, materiaRowIndex } from "../../../utils/materias";

export const MateriaPage = () => {
  const { materias, loading } = useSelector((state) => state.materia);
  const { privileges } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMaterias());
  }, [dispatch]);

  const handleDeleteMateria = (id) => {
    const subject = materias.find((materia) => materia.id_subj === id);
    dispatch(startDeleteMateria(id, subject.user_id));
  };
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          GESTION DE MATERIAS
        </h1>
      </div>
      <div className="w-2/2 mx-4 my-12 flex flex-col gap-6">
        {privileges[12] === "1" && (
          <div className="mx-4">
            <Link
              className="bg-green-600 py-2 rounded-md text-center text-white hover:bg-green-800 font-bold flex justify-center items-center w-2/5"
              to={"crear"}
            >
              <FontAwesomeIcon
                icon={faBook}
                className="mr-2"
              />
              <span>Registrar Materia</span>
            </Link>
          </div>
        )}
        <div className="overflow-y-auto">
          <Table
            columns={materiaColumns}
            rows={materias}
            indexs={materiaRowIndex}
            handleDelete={handleDeleteMateria}
            isUpdate={privileges[14] === "1"}
            isDelete={privileges[15] === "1"}
          />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};
