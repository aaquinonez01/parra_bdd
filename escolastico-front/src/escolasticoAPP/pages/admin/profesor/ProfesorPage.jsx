import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../../components/Loading";
import {
  getListProfesores,
  startDeleteProfesor,
} from "../../../../store/profesor/thunks";
import { Table } from "../../../components/Table";
import {
  profesorColumns,
  profesorRowIndex,
} from "../../../utils/PROFESORES.JS";

export const ProfesorPage = () => {
  const { profesores, loading } = useSelector((state) => state.profesor);
  const { privileges } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProfesores());
  }, [dispatch]);

  const handleDeleteProfesor = (id) => {
    const teacher = profesores.find((profesor) => profesor.id_teach === id);
    dispatch(startDeleteProfesor(id, teacher.user_id));
  };
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          GESTION DE PROFESORES
        </h1>
      </div>
      <div className="w-2/2 mx-4 my-12 flex flex-col gap-6">
        <div className="overflow-y-auto">
          <Table
            columns={profesorColumns}
            rows={profesores}
            indexs={profesorRowIndex}
            isUpdate={privileges[10] === "1"}
            isDelete={privileges[11] === "1"}
            handleDelete={handleDeleteProfesor}
          />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};
