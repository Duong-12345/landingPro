const initState = {
    headerText:[]
}

export const dataHeaderText = (state=initState, action)=>{
    switch(action.type){
        case 'GET_HEADER_REQUEST':{
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_HEADER_SUCCESS':{
            return {
                ...state,
                isFetching: false,
                headerText: action.payload
            }
        }
        case 'GET_HEADER_ERROR':{
            return {
                ...state,
                isFetching: false
            }
        }
        default:
            return state
    }
}