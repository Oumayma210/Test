import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllDrafts } from "../JS/Actions/Action";
import { Spinner } from "react-bootstrap";
import AnnonceCardDrafts from "./AnnonceCardDrafts";
const DraftsAnnonce = () => {
    const dispatch = useDispatch();
    const listDraftsAnnonces = useSelector(
        (state) => state.testReducer.listDraftAnnonce.annonce
    );
    const load = useSelector((state) => state.testReducer.load);
    // console.log(listDraftsAnnonces);
    useEffect(() => {
        dispatch(getAllDrafts());
    }, [dispatch]);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
        >
            {load ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                listDraftsAnnonces?.map((el) => (
                    <AnnonceCardDrafts el={el} key={el._id} />
                ))
            )}
        </div>
    );
};
export default DraftsAnnonce;
