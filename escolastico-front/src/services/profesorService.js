import { axiosInstance } from "./config";

export const getProfesores = async () => {
    const response = await axiosInstance.get("/teachers/list");
    return response.data;
};

export const getOneProfesor = async (id) => {
    const response = await axiosInstance.get(`/teachers/find/${id}`);
    return response.data;
};

export const saveProfesor = async (profesor) => {
    const { data } = await axiosInstance.post("/teachers/save", profesor);
    return data;
};

export const updateOneProfesor = async (profesor) => {
    const { data } = await axiosInstance.put(`/teachers/update/${profesor.id}`, profesor);
    return data;
};

export const deleteProfesor = async (id, idUsuario) => {
    const { data } = await axiosInstance.delete(`/teachers/delete/${id}/${idUsuario}`);
    return data;
};

export const getProfesorByUser = async () => {
    const response = await axiosInstance.get(`/teachers/obtenerProfesorPorIdUsuario`);
    return response.data;
}