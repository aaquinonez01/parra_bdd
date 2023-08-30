import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLoginWithNamePassword } from "../../store";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);
  const { nombre, contrasena, onInputChange } = useForm({
    nombre: "",
    contrasena: "",
  });

  const handleLogin = () => {
    dispatch(startLoginWithNamePassword({ nombre, contrasena }));
  };
  return (
    <AuthLayout>
      <div className=" bg-white w-1/3 rounded-md p-5">
        <div>
          <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>
        </div>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <div className="flex flex-col p-3">
          <label className="text-xl font-bold">Usuario</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Usuario"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col p-3">
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
        <div className="flex flex-col p-2">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};
