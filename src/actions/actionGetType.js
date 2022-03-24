const getTypeMethod = async () => {
    const URL = "https://615ab6234a360f0017a81212.mockapi.io/api/demo/Type";
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    return data;
  };
  
  export const getTypeRequest = () => {
    return {
      type: "GET_TYPE_REQUEST",
    };
  };
  
  export const getTypeSuccess = (data) => {
    return {
      type: "GET_TYPE_SUCCESS",
      payload: data,
    };
  };
  
  export const getTypeError = () => {
    return {
      type: "GET_TYPE_ERROR",
    };
  };
  
  export const getType = async (dispatch) => {
    dispatch(getTypeRequest());
    const result = await getTypeMethod();
  
    if (!!result) {
      dispatch(getTypeSuccess(result));
    } else dispatch(getTypeError());
  };
  