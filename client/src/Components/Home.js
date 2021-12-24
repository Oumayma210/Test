import React from "react";
import AnnonceList from "./AnnonceList";
const Home = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "Brown", paddingTop: "15px" }}>Annonce TN</h2>
            <AnnonceList />
        </div>
    );
};

export default Home;
