const initState = {
    img:[],
    isFetching:null
}

export const dataImageReducer =  (state=initState, action)=>{
    switch(action.type){
        case 'GET_IMAGE_REQUEST':{
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_IMAGE_SUCCESS':{
            return {
                ...state,
                img: action.payload,
                isFetching: false,
            }
        }
        case 'GET_IMAGE_ERROR':{
            return {
                ...state,
                isFetching: false
            }
        }
        // case "UPDATE_HEADER_TEXT_REQUEST":{
        //     return{
        //         ...state,
        //         isFetching:true
        //     }
        // }
        // case "UPDATE_HEADER_TEXT_SUCCESS":{
        //     return{
        //         ...state,
        //         img: action.payload,
        //         isFetching:false,
        //     }
        // }
        // case "UPDATE_HEADER_TEXT_ERROR":{
        //     return{
        //         ...state,
        //         isFetching:false,
        //     }
        // }
        default:
            return state
    }
}