import React from "react";
import { Card } from "react-bootstrap";

const AnnonceCard = ({ el }) => {
    return (
        <div style={{ paddingTop: "40px" }}>
            <Card style={{ width: "16rem" }}>
                <Card.Body>
                    <Card.Title>{el?.title}</Card.Title>
                    <Card.Text>{el?.price} dt</Card.Text>
                    <Card.Img src={el?.Image} />
                    <Card.Text>
                        <i className="fa fa-envelope" aria-hidden="true">
                            {el?.email}
                        </i>
                    </Card.Text>
                    <Card.Text>+216-{el?.tel}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AnnonceCard;
