import React from "react";
import { Card } from "react-bootstrap";

const AnnonceCard = ({ el }) => {
    return (
        <div style={{ paddingTop: "40px" }}>
            <Card style={{ width: "16rem" }}>
                <Card.Body>
                    <Card.Title>{el?.title}</Card.Title>
                    <Card.Text>{el?.price}</Card.Text>
                    <Card.Img src={el?.Image}/>
                    <Card.Text>{el?.email}</Card.Text>
                    <Card.Text>{el?.tel}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AnnonceCard;
