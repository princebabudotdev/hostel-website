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

const getQueries = async (page, limit = 5) => {
  return axiosInstance.get(
    `api/v1/admin/all/quaries?page=${page}&limit=${limit}`,
  );
};

const blockUser = async (id) => {
  return axiosInstance.patch(`api/v1/admin/users/${id}/block`);
};

const unBlockUser = async (id) => {
  return axiosInstance.patch(`api/v1/admin/users/${id}/unblock`);
};

const createRoom = async (data) => {
  return await axiosInstance.post(`api/v1/admin/rooms/create`, data);
};

const assignRoom = async (id, roomNo) => {
  return await axiosInstance.patch(
    `api/v1/admin/rooms/assign/${id}/student`,
    roomNo,
  );
};

export default {
  getUsers,
  suspendUser,
  ActiveUser,
  getQueries,
  blockUser,
  unBlockUser,
  assignRoom,
  createRoom,
};
