import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AnnonceCard from "./AnnonceCard";
import { Spinner } from "react-bootstrap";
import { getAllAnnonce } from './../JS/Actions/Action';
const AnnonceListp = () => {
    const dispatch = useDispatch();
    const listAnnonces = useSelector(
        (state) => state.testReducer.listAnnonces.annonce
    );
    console.log(listAnnonces);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            setLoading(true);
            dispatch(getAllAnnonce());
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
                listAnnonces?.map((el) => <AnnonceCardp el={el} key={el._id} />)
            )}
        </div>
    );
};
export default AnnonceListp;