const initState = {
    dataType:[],
    dataUpdate:{
        nameType:'nameType 1',
        numberType:'numberType 1'
    }
}

export const dataTypeReducer = (state=initState, action)=>{
    switch(action.type){
        case 'GET_TYPE_REQUEST':{
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_TYPE_SUCCESS':{
            return {
                ...state,
                isFetching: false,
                dataType: action.payload
            }
        }
        case 'GET_TYPE_ERROR':{
            return {
                ...state,
                isFetching: false
            }
        }
        case 'UPDATE_TYPE':{

            let tmp = {}
            state.dataType.forEach(e=>{
                if(action.payload === e.id){
                     tmp = {
                        numberType : e.numberType,
                        nameType: e.nameType
                    }
                }
            })
            return {
                ...state,
                dataUpdate: tmp
            }
        }
        default:
            return state
    }
}