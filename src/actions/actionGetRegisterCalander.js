const getRegisterCalanderMethod = async () => {
    const URL = "https://615ab6234a360f0017a81212.mockapi.io/api/demo/RegisterCalander";
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    return data;
  };
  
  export const getRegisterCalanderRequest = () => {
    return {
      type: "GET_REGISTER_CALANDER_REQUEST",
    };
  };
  
  export const getRegisterCalanderSuccess = (data) => {
    return {
      type: "GET_REGISTER_CALANDER_SUCCESS",
      payload: data,
    };
  };
  
  export const getRegisterCalanderError = () => {
    return {
      type: "GET_REGISTER_CALANDER_ERROR",
    };
  };
  
  export const getRegisterCalander = async (dispatch) => {
    dispatch(getRegisterCalanderRequest());
    const result = await getRegisterCalanderMethod();
  
    if (!!result) {
      dispatch(getRegisterCalanderSuccess(result));
    } else dispatch(getRegisterCalanderError());
  };
  