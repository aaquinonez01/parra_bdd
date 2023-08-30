import { axiosInstance } from "./config";

export const getEstudiantes = async () => {
  const response = await axiosInstance.get("/students/list");
  return response.data;
};

export const getOneEstudiante = async (id) => {
  const response = await axiosInstance.get(`/students/find/${id}`);
  return response.data;
};

export const saveEstudiante = async (estudiante) => {
  const { data } = await axiosInstance.post("/students/save", estudiante);
  return data;
};

export const updateOneEstudiante = async (estudiante) => {
  console.log(estudiante);
  const { data } = await axiosInstance.put(
    `/students/update/${estudiante.idEstudiante}`,
    estudiante
  );
  return data;
};

export const deleteEstudiante = async (id, idUsuario) => {
  console.log(id, idUsuario);
  const { data } = await axiosInstance.delete(
    `/students/delete/${id}/${idUsuario}`
  );
  return data;
};

export const getEstudianteByUser = async () => {
  const response = await axiosInstance.get(
    `/students/obtenerEstudiantePorIdUsuario`
  );
  return response.data;
};
