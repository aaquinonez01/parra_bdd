import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../../../../components/Loading";
import { getListNotas, startDeleteNota } from "../../../../store/nota/thunks";
import { Table } from "../../../components/Table";
import { notaColumns, notaRowIndex } from "../../../utils/notas";

export const NotaPage = () => {
  const { notas, loading } = useSelector((state) => state.nota);
  const { privileges } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListNotas());
  }, [dispatch]);

  const handleDeleteNota = (id) => {
    dispatch(startDeleteNota(id));
  };
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          GESTION DE NOTAS
        </h1>
      </div>
      <div className="w-2/2 mx-4 my-12 flex flex-col gap-6">
        {privileges[16] === "1" && (
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
        )}
        <div className="overflow-y-auto">
          <Table
            columns={notaColumns}
            rows={notas}
            indexs={notaRowIndex}
            handleDelete={handleDeleteNota}
            isUpdate={privileges[18] === "1"}
            isDelete={privileges[19] === "1"}
          />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};
