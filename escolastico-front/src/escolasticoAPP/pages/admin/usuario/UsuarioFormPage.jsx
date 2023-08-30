import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { startNewEstudiante } from "../../../../store/estudiante/thunks";
import { startNewProfesor } from "../../../../store/profesor/thunks";
import { startNewUsuario } from "../../../../store/usuario/thunks";
import Modal from "../../../components/Modal";
import {
  privilegios_estudiante,
  privilegios_profesor,
} from "../../../utils/data_privilegios";
import { EstudianteFormModal } from "./components/EstudianteFormModal";
import { PrivilegiosModal } from "./components/PrivilegiosModal";
import { ProfesorFormModal } from "./components/ProfesorFormModal";

export const UsuarioFormPage = () => {
  const { id } = useParams();
  const [tipo, setTipo] = useState("0");
  const { usuarios } = useSelector((state) => state.usuario);
  const [verPrivilegios, setVerPrivilegios] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [estudianteData, setEstudianteData] = useState({});
  const [profesorData, setProfesorData] = useState({});
  const [privilegiosData, setPrivilegiosData] = useState(
    "000000000000000000000000"
  );
  const { nombre, contrasena, onInputChange, formState } = useForm({
    nombre: "",
    contrasena: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEstudianteData = (data) => {
    setEstudianteData(data);
  };

  const handleProfesorData = (data) => {
    setProfesorData(data);
  };

  const handlePrivilegiosData = (data) => {
    setPrivilegiosData(data);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleChangeTipo = (e) => {
    setVerPrivilegios(false);
    setTipo(e.target.value);
  };

  useEffect(() => {
    if (id) {
      const usuario = usuarios.find((item) => item.id_user == id);
      setPrivilegiosData(usuario?.privileges);
      formState.nombre = usuario?.name_user;
      formState.contrasena = usuario?.password_user;
    }
  }, [id]);

  useEffect(() => {
    if (tipo !== "0") {
      openModal();
    }
    if (tipo === "1") {
      handlePrivilegiosData(privilegios_profesor);
    } else if (tipo === "2") {
      handlePrivilegiosData(privilegios_estudiante);
    }
  }, [tipo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipo === "1") {
      const usuarioData = {
        nombre,
        contrasena,
        privilegios: privilegiosData,
        ...profesorData,
      };
      dispatch(startNewProfesor(usuarioData));
    } else if (tipo === "2") {
      const usuarioData = {
        nombre,
        contrasena,
        privilegios: privilegiosData,
        ...estudianteData,
      };
      dispatch(startNewEstudiante(usuarioData));
    } else {
      const usuarioData = {
        nombre,
        contrasena,
        privilegios: privilegiosData,
      };
      dispatch(startNewUsuario(usuarioData));
    }
    navigate("/usuarios");
  };

  return (
    <div className="mx-auto">
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          {tipo === "1" && !verPrivilegios ? (
            <ProfesorFormModal
              closeModal={closeModal}
              handleProfesorData={handleProfesorData}
            />
          ) : tipo === "2" && !verPrivilegios ? (
            <EstudianteFormModal
              handleEstudianteData={handleEstudianteData}
              closeModal={closeModal}
            />
          ) : tipo === "3" || verPrivilegios ? (
            <PrivilegiosModal
              handlePrivilegiosData={handlePrivilegiosData}
              privilegiosData={privilegiosData}
              closeModal={closeModal}
            />
          ) : (
            <></>
          )}
        </Modal>
      )}

      <div>
        <h1 className="text-center font-extrabold text-4xl ">
          REGISTRAR USUARIO
        </h1>
      </div>
      <div className=" w-2/4 mx-auto my-6 flex flex-col gap-6">
        <div className="mx-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xl font-bold">Nombre</label>
                <input
                  className="border-2 border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-bold">Contraseña</label>
                <input
                  className="border-2 border-gray-300 rounded-md p-2"
                  type="password"
                  placeholder="Contraseña"
                  name="contrasena"
                  value={contrasena}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-bold">Privilegios</label>
                <input
                  className="border-2 border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder="000000000000000000"
                  value={privilegiosData}
                  name="contrasena"
                  disabled
                />
              </div>
              {tipo === "1" || tipo === "2" ? (
                <button
                  className="bg-blue-600 py-2 rounded-md text-center text-white hover:bg-blue-800 font-bold flex justify-center items-center w-3/4 mx-auto"
                  type="button"
                  onClick={() => {
                    setVerPrivilegios(true);
                    openModal();
                  }}
                >
                  <span>
                    Visualizar Privilegios del{" "}
                    {tipo === "1" ? "Profesor" : "Estudiante"}
                  </span>
                </button>
              ) : (
                <></>
              )}
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">
                  Seleccionar tipo de Usuario
                </h4>
                <div className="flex flex-col gap-2">
                  {id && (
                    <>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="tipo"
                          value="1"
                          id="tipoProfesor"
                          onChange={handleChangeTipo}
                        />
                        <label form="tipoProfesor">Profesor</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="tipo"
                          value="2"
                          onChange={handleChangeTipo}
                        />
                        <label>Estudiante</label>
                      </div>
                    </>
                  )}
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="tipo"
                      value="3"
                      onChange={handleChangeTipo}
                    />
                    <label>Otro</label>
                  </div>
                </div>
              </div>
              {/* Crear boton de registrar*/}
              <div className="flex flex-col gap-2 w-full">
                <button
                  className="bg-green-600 py-2 rounded-md text-center text-white hover:bg-green-800 font-bold flex justify-center items-center w-3/4 mx-auto"
                  type="submit"
                >
                  <span>Registrar Usuario</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
