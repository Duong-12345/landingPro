const getImageMethod = async () => {
  const URL = "https://615ab6234a360f0017a81212.mockapi.io/api/demo/Image";
  const response = await fetch(URL, { method: "GET" });
  const data = await response.json();
  // console.log(data)
  return data;
};

export const getImageRequest = () => {
  return {
    type: "GET_IMAGE_REQUEST",
  };
};

export const getImageSuccess = (data) => {
  return {
    type: "GET_IMAGE_SUCCESS",
    payload: data,
  };
};

export const getImageError = () => {
  return {
    type: "GET_IMAGE_ERROR",
  };
};

export const getImage = async (dispatch) => {
  const result = await getImageMethod();
  // console.log(result)
  dispatch(getImageRequest());

  if (!!result) {
    dispatch(getImageSuccess(result));
  } else dispatch(getImageError());
};
