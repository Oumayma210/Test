import React from "react";
import { Card } from "react-bootstrap";

const AnnonceCard = ({ el }) => {
    return (
        <div
            style={{
                paddingTop: "40px",
                display: "flex",
                flexWrap: "wrap",
                justifiyContent: "space-between",
            }}
        >
            <Card
                style={{
                    width: "16rem",
                }}
            >
                <Card.Body>
                    <Card.Title>{el?.title}</Card.Title>
                    <Card.Text>{el?.price} dt</Card.Text>
                    <Card.Img src={el?.Image} style={{ height: "140px" }} />
                    <Card.Text>
                            {el?.email}
                    </Card.Text>
                    <Card.Text>+216-{el?.tel}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AnnonceCard;
