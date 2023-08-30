import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../../components/Loading";
import {
  getListEstudiantes,
  startDeleteEstudiante,
} from "../../../../store/estudiante/thunks";
import { Table } from "../../../components/Table";
import {
  estudianteColumns,
  estudianteRowIndex,
} from "../../../utils/estudiantes";

export const EstudiantePage = () => {
  const { estudiantes, loading } = useSelector((state) => state.estudiante);
  const { privileges } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListEstudiantes());
  }, [dispatch]);

  const handleDeleteEstudiante = (id) => {
    const student = estudiantes.find((estudiante) => estudiante.id_est === id);
    dispatch(startDeleteEstudiante(id, student.user_id));
  };
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          GESTION DE ESTUDIANTES
        </h1>
      </div>
      <div className="w-2/2 mx-4 my-12 flex flex-col gap-6">
        <div className="overflow-y-auto">
          <Table
            columns={estudianteColumns}
            rows={estudiantes}
            indexs={estudianteRowIndex}
            handleDelete={handleDeleteEstudiante}
            isUpdate={privileges[6] === "1"}
            isDelete={privileges[7] === "1"}
          />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};
