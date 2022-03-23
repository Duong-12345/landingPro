const getProvinceMethod = async () => {
  // const URL = "http://10.20.2.201:5000/province";
  const URL = "http://localhost:3001/api/province";
  const response = await fetch(URL, { method: "GET" });
  const data = await response.json();
  // console.log(data)
  return data;
  
};

const getDistrictMethod = async () => {
  // const URL = "http://10.20.2.201:5000/district";
  const URL = "http://localhost:3001/api/district";
  const response = await fetch(URL, { method: "GET" });
  const data = await response.json();
  return data;
};

export const getProvinceRequest = () => {
  return {
    type: "GET_PROVINCE_REQUEST",
  };
};

export const getProvinceSuccess = (data) => {
  return {
    type: "GET_PROVINCE_SUCCESS",
    payload: data,
  };
};

export const getProvinceError = () => {
  return {
    type: "GET_PROVINCE_ERROR",
  };
};

export const getDistrictRequest = () => {
  return {
    type: "GET_DISTRICT_REQUEST",
  };
};

export const getDistrictSuccess = (data) => {
  return {
    type: "GET_DISTRICT_SUCCESS",
    payload: data,
  };
};

export const getDistrictError = () => {
  return {
    type: "GET_DISTRICT_ERROR",
  };
};

export const getProvince = async (dispatch) => {
  dispatch(getProvinceRequest());
  const result = await getProvinceMethod();
// console.log(result)
  if (!!result) {
    dispatch(getProvinceSuccess(result));
  } else dispatch(getProvinceError());
};

export const getDistrict = async (dispatch) => {
  dispatch(getDistrictRequest());
  const result = await getDistrictMethod();

  if (!!result) {
    dispatch(getDistrictSuccess(result));
  } else dispatch(getDistrictError());
};
