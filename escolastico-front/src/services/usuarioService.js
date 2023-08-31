import { axiosInstance } from "./config";

export const getUsuarios = async () => {
  const response = await axiosInstance.get("/users/list");
  return response.data;
};

export const getOneUsuario = async (id) => {
  const response = await axiosInstance.get(`/users/find/${id}`);
  return response.data;
};

export const saveUsuario = async (usuario) => {
  const { data } = await axiosInstance.post("/users/save", usuario);
  return data;
};

export const updateOneUsuario = async (id, usuario) => {
  const { data } = await axiosInstance.put(`/users/update/${id}`, usuario);
  return data;
};

export const deleteUsuario = async (id) => {
  const { data } = await axiosInstance.delete(`/users/delete/${id}`);
  return data;
};

export const getAuditoria = async () => {
  const response = await axiosInstance.get("/users/obtenerAuditorias");
  return response.data;
};
