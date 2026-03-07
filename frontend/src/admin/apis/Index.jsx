import axiosInstance from "../../config/axios..config";

const getUsers = async (page, limit = 5) => {
  return axiosInstance.get(`/api/v1/admin/users?page=${page}&limit=${limit}`);
};

const suspendUser = async (id) => {
  return axiosInstance.patch(`api/v1/admin/users/${id}/suspend`);
};

const ActiveUser = async (id) => {
  return axiosInstance.patch(`api/v1/admin/users/${id}/active`);
};

export default {
  getUsers,
  suspendUser,
  ActiveUser,
};
