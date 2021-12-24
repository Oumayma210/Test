import {
    LOAD,
    FAILED,
    SIGNIN_ADMIN,
    GET_ALLANNONCE,
    GET_ALLDRAFTSANNONCES,
} from "./ActionTypes";
import axios from "axios";
//sign in admin
export const signIn = (admin, history) => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.post("/admin/signin", admin);
        dispatch({ type: SIGNIN_ADMIN, payload: result.data });
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response.data.errors });
    }
};
//get all annonces
export const getAllAnnonce = () => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.get("/admin/");
        dispatch({
            type: GET_ALLANNONCE,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAILED,
            payload: error,
        });
    }
};
// const getAllAnnonces = async () => {
//     let result = await axios.get("/admin/");
//     return result.data;
// };
// export const getAllAnnonce = () => (dispatch) => {
//     return getAllAnnonces().then((result) => {
//         if (result) {
//             dispatch({
//                 type: GET_ALLANNONCE,
//                 payload: result,
//             });
//         }
//     });
// };
//get all drafts
export const getAllDrafts = () => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.get("/admin/getdrafts");
        dispatch({
            type: GET_ALLDRAFTSANNONCES,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAILED,
            payload: error,
        });
    }
};
//delete annonce
export const deleteAnnonce = (_id) => async (dispatch) => {
    try {
        await axios.delete(`/admin/${_id}`);
        dispatch(getAllAnnonce());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
//anyone: add annonce
export const addAnnonce = (newAnnonce) => async (dispatch) => {
    try {
        await axios.post("/add_annonce", newAnnonce);
        dispatch(getAllAnnonce());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
