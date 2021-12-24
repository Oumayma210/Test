import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllDrafts } from "../JS/Actions/Action";
import AnnonceCard from "./AnnonceCard";
import { Spinner } from "react-bootstrap";
const AnnonceList = () => {
    const dispatch = useDispatch();
    const listDraftAnnonce = useSelector(
        (state) => state.testReducer.listDraftAnnonce.annonce
    );
    // const load = useSelector((state) => state.testReducer.load);
    console.log(listDraftAnnonce);
    // useEffect(() => {
    //     dispatch(getAllAnnonce());
    // }, [dispatch]);
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
                listDraftAnnonce?.map((el) => <AnnonceCard el={el} key={el._id} />)
            )}
        </div>
    );
};
export default AnnonceList;
