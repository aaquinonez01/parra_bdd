import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetNotasByEstudiante } from "../../../store/nota/thunks";
import { Table } from "../../components/Table";
import {
  misNotasEstudianteColumns,
  notaEstudianteRowIndex,
} from "../../utils/notas-estudiante";

export const MisNotas = () => {
  const { estudiante } = useSelector((state) => state.estudiante);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetNotasByEstudiante(estudiante.name_est));
  }, [dispatch]);
  const { notasEstudiante, loading } = useSelector((state) => state.nota);

  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">MIS NOTAS</h1>
      </div>
      <div className="w-2/3 mx-auto my-12 flex flex-col gap-6">
        <div className="overflow-y-auto">
          <Table
            columns={misNotasEstudianteColumns}
            rows={notasEstudiante}
            indexs={notaEstudianteRowIndex}
          />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};
