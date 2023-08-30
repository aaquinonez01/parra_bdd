import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { data_privilegios } from "../../../../utils/data_privilegios";
export const TableUsuario = ({
  columns,
  usuarios,
  handleDeleteUsuario,
  isDelete,
  isUpdate,
}) => {
  const { nombre } = useSelector((state) => state.auth);
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {usuarios.map((usuario) => (
          <tr key={usuario.id_user}>
            <td className="px-6 py-4 whitespace-no-wrap text-center">
              {usuario.id_user}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-center">
              {usuario.name_user}
            </td>
            <td className="whitespace-no-wrap text-center flex">
              {
                /*Mostrar privilegios, arriba la letra a la que corresponde y abajo el numero */
                usuario.privileges
                  ? usuario.privileges.split("").map((privilegio, index) => {
                      return (
                        <div
                          className="flexflex-col border"
                          key={index}
                        >
                          <p className="text-sm font-bold w-full bg-blue-200 px-1">
                            {data_privilegios[index]
                              ? data_privilegios[index].nombre
                              : ""}{" "}
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              privilegio === "0" ? "bg-red-400" : "bg-green-400"
                            }`}
                          >
                            {privilegio}
                          </p>
                        </div>
                      );
                    })
                  : ""
              }
            </td>
            <td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium flex justify-between gap-8">
                {isUpdate && (
                  <Link
                    to={`editar/${usuario.id_user}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Editar
                  </Link>
                )}

                {
                  /*Si el usuario es el mismo que el logueado no se puede eliminar */
                  usuario.name_user !== nombre && isDelete ? (
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteUsuario(usuario.id_user)}
                    >
                      Eliminar
                    </button>
                  ) : (
                    <></>
                  )
                }
              </td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
