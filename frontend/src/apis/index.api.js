import axiosInstance from "../config/axios..config";

const createQuery = async (queryData) => {
  return axiosInstance.post("/api/v1/index/query/create", queryData);
};

export default {
  createQuery,
};
