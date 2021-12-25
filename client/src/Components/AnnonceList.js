import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AnnonceCard from "./AnnonceCard";
import { Spinner } from "react-bootstrap";
import { getAllAnnonce } from "./../JS/Actions/Action";
const AnnonceList = () => {
    const dispatch = useDispatch();
    const listAnnonces = useSelector(
        (state) => state.testReducer.listAnnonces.annonce
    );
    const load = useSelector((state) => state.testReducer.load);
    console.log(listAnnonces);
    useEffect(() => {
        dispatch(getAllAnnonce());
    }, [dispatch]);

    // useEffect(() => {
    //     try {
    //         setLoading(true);
    //         dispatch(getAllAnnonce());
    //         setLoading(false);
    //     } catch (error) {
    //         console.log("failed to getallannonce", error);
    //     }
    // }, []);
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
                listAnnonces?.map((el) => <AnnonceCard el={el} key={el._id} />)
            )}
        </div>
    );
};
export default AnnonceList;
