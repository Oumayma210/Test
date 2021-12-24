import React, { useEffect, useState } from "react";
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
    console.log(listDraftsAnnonces);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            setLoading(true);
            dispatch(getAllDrafts());
            setLoading(false);
        } catch (error) {
            console.log("failed to getallannonce", error);
        }
    }, []);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {loading ? (
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
