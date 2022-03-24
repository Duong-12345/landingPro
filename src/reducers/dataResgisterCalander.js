const initState = {
    dataRegisterCalander:[]
}

export const dataRegisterCalanderReducer = (state=initState, action)=>{
    switch(action.type){
        case 'GET_REGISTER_CALANDER_REQUEST':{
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_REGISTER_CALANDER_SUCCESS':{
            return {
                ...state,
                isFetching: false,
                dataRegisterCalander: action.payload
            }
        }
        case 'GET_REGISTER_CALANDER_ERROR':{
            return {
                ...state,
                isFetching: false
            }
        }
        default:
            return state
    }
}