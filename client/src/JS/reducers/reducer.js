import {
    LOAD,
    FAILED,
    SIGNIN_ADMIN,
    GET_ALLANNONCE,
    GET_ALLDRAFTSANNONCES,
} from "../Actions/ActionTypes";

//initialstate
const initialState = {
    listAnnonces: [],
    listDraftAnnonce: [],
    error: [],
    load: false,
    isAuthadm: false,
};
//pure function
const testReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD:
            return { ...state, load: true };
        case SIGNIN_ADMIN:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                load: false,
                isAuthadm: true,
            };
        case GET_ALLANNONCE:
            return {
                ...state,
                load: false,
                listAnnonces: payload,
            };
        case GET_ALLDRAFTSANNONCES:
            return {
                ...state,
                load: false,
                listDraftAnnonce: payload,
            };
        case FAILED:
            return { ...state, load: false, error: payload };
        default:
            return state;
    }
};
export default testReducer;
