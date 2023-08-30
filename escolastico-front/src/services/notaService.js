import { axiosInstance } from "./config";

export const getNotas = async () => {
  const response = await axiosInstance.get("/notes/list");
  return response.data;
};

export const getOneNota = async (id) => {
  const response = await axiosInstance.get(`/notes/find/${id}`);
  return response.data;
};

export const saveNota = async (nota) => {
  const { data } = await axiosInstance.post("/notes/save", nota);
  return data;
};

export const updateOneNota = async (nota) => {
  console.log(nota);
  const { data } = await axiosInstance.put(
    `/notes/update/${nota.idNota}`,
    nota
  );
  return data;
};

export const deleteNota = async (id) => {
  console.log(id);
  const { data } = await axiosInstance.delete(`/notes/delete/${id}`);
  return data;
};

export const getNotasByEstudiante = async (nombreEstudiante) => {
  const response = await axiosInstance.get(
    `/notes/obtenerNotasPorEstudiante/${nombreEstudiante}`
  );
  return response.data;
};

export const getNotasByProfesor = async (nombreProfesor, nombreMateria) => {
  const response = await axiosInstance.get(
    `/notes/obtenerNotasPorMateriaYProfesor/${nombreMateria}/${nombreProfesor}`
  );
  return response.data;
};
