import {
  faBook,
  faGraduationCap,
  faPencil,
  faSignOutAlt,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import fondo from "../../assets/fondo.svg";
import { startLogout } from "../../store";
const cadena_privileges = "111111111111111111111111";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { nombre, privileges } = useSelector((state) => state.auth);
  const { estudiante } = useSelector((state) => state.estudiante);
  const { profesor } = useSelector((state) => state.profesor);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div
      className="w-56 bg-gray-800 text-white shadow-md"
      style={{
        background: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 h-full">
        <div className="flex items-center mb-4 px-2">
          <div className="mr-3">
            <img
              src={avatar} // Reemplaza con la URL de tu avatar
              alt="Avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">{nombre}</p>
          </div>
        </div>
        <div className="bg-slate-500 h-0.5 mb-5"></div>
        <div className="flex flex-col justify-evenly">
          <ul className="p-2 flex flex-col gap-2">
            {estudiante?.id_est || profesor?.id_teach ? (
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                  />
                  Mi Perfil
                </a>
              </li>
            ) : (
              <></>
            )}
            {estudiante?.id_est && (
              <li className="mb-2">
                <Link
                  to="/mis-notas"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                  />
                  Mis Notas
                </Link>
              </li>
            )}
            {profesor?.id_teach && (
              <li className="mb-2">
                <Link
                  to="/notas-materia"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                  />
                  Notas de la Materia
                </Link>
              </li>
            )}
            {privileges[13] === "1" && !profesor?.id_teach && (
              <li className="mb-2">
                <Link
                  to="/materias"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faBook}
                    className="mr-2"
                  />
                  Materias
                </Link>
              </li>
            )}
            {privileges[17] === "1" && !profesor?.id_teach && (
              <li className="mb-2">
                <Link
                  to="/notas"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="mr-2"
                  />
                  Notas
                </Link>
              </li>
            )}
            {privileges[5] === "1" && !profesor?.id_teach && (
              <li className="mb-2">
                <Link
                  to="/estudiantes"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="mr-2"
                  />
                  Estudiantes
                </Link>
              </li>
            )}

            {privileges[9] === "1" && (
              <li className="mb-2">
                <Link
                  to="/profesores"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faUniversity}
                    className="mr-2"
                  />
                  Profesores
                </Link>
              </li>
            )}
            {privileges[1] === "1" && (
              <li className="mb-2">
                <Link
                  to="/usuarios"
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                  />
                  Usuarios
                </Link>
              </li>
            )}
            {
              /*Toda la cadena de privileges debe ser de 1 */
              privileges === cadena_privileges && (
                <li className="mb-2">
                  <Link
                    to="usuarios/auditorias"
                    className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2"
                    />
                    Auditorias
                  </Link>
                </li>
              )
            }
          </ul>
          <div>
            <div className="bg-slate-500 h-0.5 mb-5"></div>
            <ul>
              <li className="mb-2 ">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-4 text-gray-200 hover:text-gray-900 hover:bg-slate-100 p-2 rounded-md transition-all w-full"
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="mr-2"
                  />
                  Cerrar Sesion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
