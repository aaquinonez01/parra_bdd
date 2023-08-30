import { axiosInstance } from "./config";

export const getMaterias = async () => {
    const response = await axiosInstance.get("/subjects/list");
    return response.data;
};

export const getOneMateria = async (id) => {
    const response = await axiosInstance.get(`/subjects/find/${id}`);
    return response.data;
};

export const saveMateria = async (materia) => {
    const { data } = await axiosInstance.post("/subjects/save", materia);
    return data;
};

export const updateOneMateria = async (materia) => {
    const { data } = await axiosInstance.put(`/subjects/update/${materia.idMateria}`, materia);
    return data;
};

export const deleteMateria = async (id) => {
    const { data } = await axiosInstance.delete(`/subjects/delete/${id}`);
    return data;
};