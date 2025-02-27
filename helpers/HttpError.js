const errorMessages = {
  400: "Bad Request",
  401: "Unathorized",
  403: "forbidden",
  404: "Not Found",
  409: "Conflict",
};

const HttpError = (status, message = errorMessages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
