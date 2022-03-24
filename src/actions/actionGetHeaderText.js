const getHeaderMethod = async () => {
  // const URL = "http://10.20.2.201:5000/school";
  const response = await fetch(URL, { method: "GET" });
  const data = await response.json();
  return data;
};

export const getHeaderRequest = () => {
  return {
    type: "GET_HEADER_REQUEST",
  };
};

export const getHeaderSuccess = (data) => {
  return {
    type: "GET_HEADER_SUCCESS",
    payload: data,
  };
};

export const getHeaderError = () => {
  return {
    type: "GET_HEADER_ERROR",
  };
};

export const getHeader = async (dispatch) => {
  dispatch(getHeaderRequest());
  const result = await getHeaderMethod();

  if (!!result) {
    dispatch(getHeaderSuccess(result));
  } else dispatch(getHeaderError());
};
