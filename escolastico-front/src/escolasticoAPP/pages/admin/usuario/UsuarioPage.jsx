import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../../../../components/Loading";
import {
  getListUsuarios,
  startDeleteUsuario,
} from "../../../../store/usuario/thunks";
import { usuarioColumns } from "../../../utils/usuarios";
import { TableUsuario } from "./components/TableUsuario";

export const UsuarioPage = () => {
  const { usuarios, loading } = useSelector((state) => state.usuario);
  const { privileges } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUsuarios());
  }, [dispatch]);

  const handleDeleteUsuario = (id) => {
    dispatch(startDeleteUsuario(id));
  };
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          GESTION DE USUARIOS
        </h1>
      </div>
      <div className=" w-6/7 mx-16 my-12 flex flex-col gap-6">
        {privileges[0] === "1" && (
          <div className="mx-4">
            <Link
              className="bg-green-600 py-2 rounded-md text-center text-white hover:bg-green-800 font-bold flex justify-center items-center w-2/5"
              to={`crear/`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2"
              />
              <span>Registrar Usuario</span>
            </Link>
          </div>
        )}
        <div className="overflow-y-auto">
          <TableUsuario
            columns={usuarioColumns}
            usuarios={usuarios}
            handleDeleteUsuario={handleDeleteUsuario}
            isDelete={privileges[3] === "1"}
            isUpdate={privileges[2] === "1"}
          />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};
