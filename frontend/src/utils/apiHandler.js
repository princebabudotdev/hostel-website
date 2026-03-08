export const handleResponse = (res, showToast) => {
  if (!res) return;

  showToast({
    type: "success",
    message: res?.data?.message || "Operation successful",
  });
};

export const handleError = (error, showToast) => {
 const message =
 error?.response?.data?.errors?.message ||
  error?.response?.data?.message ||
  error?.message ||
  "Something went wrong";

  showToast({
    type: "error",
    message,
  });
};
