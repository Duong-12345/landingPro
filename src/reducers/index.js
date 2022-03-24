import { combineReducers } from "redux";
import { dataReducer, departmentReducer, districtReducer, programReducer, provinceReducer, shoolReducer } from "./dataReducer";
import {  dataRegisterCalanderReducer } from "./dataResgisterCalander";
import { dataHeaderText } from "./dataText";
const rootReducer = combineReducers({
    dataForm: dataReducer,
    provinceReducer: provinceReducer,
    schoolReducer: shoolReducer,
    districtReducer: districtReducer,
    departmentReducer: departmentReducer,
    programReducer: programReducer,
    dataHeaderText: dataHeaderText,
    dataRegisterCalanderReducer: dataRegisterCalanderReducer
});
export default rootReducer;

