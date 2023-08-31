import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAuditoria } from "../../store/usuario/thunks";
import { TableAuditoria } from "../components/TableAuditoria";
import { auditoriaColumns, auditoriaRowIndex } from "../utils/auditoria";

export const AuditoriaPage = () => {
  const { auditorias } = useSelector((state) => state.usuario);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetAuditoria());
  }, [dispatch]);

  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">AUDITORIA</h1>
      </div>
      <div className="w-2/2 mx-4 my-12 flex flex-col gap-6">
        <div className="overflow-y-auto">
          <TableAuditoria
            columns={auditoriaColumns}
            rows={auditorias}
            indexs={auditoriaRowIndex}
          />
        </div>
      </div>
    </div>
  );
};
