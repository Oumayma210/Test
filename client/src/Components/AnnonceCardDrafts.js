import React from "react";
import { Card, Button } from "react-bootstrap";
import { addAnnonce, deleteAnnonce } from "./../JS/Actions/Action";
import { useDispatch } from "react-redux";
const AnnonceCardDrafts = ({ el }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ paddingTop: "40px" }}>
            <Card style={{ width: "16rem" }}>
                <Card.Body>
                    <Card.Title>{el?.title}</Card.Title>
                    <Card.Text>{el?.price}</Card.Text>
                    <Card.Text>{el?.status}</Card.Text>

                    <Card.Text>{el?.Image}</Card.Text>

                    <Card.Text>{el?.email}</Card.Text>
                    <Card.Text>{el?.tel}</Card.Text>
                    <div
                        style={{
                            justifyContent: "space-evenly",
                            display: "flex",
                        }}
                    >
                        <Button onClick={() => dispatch(addAnnonce)}>
                            {" "}
                            Publier
                        </Button>
                        <Button onClick={() => dispatch(deleteAnnonce(el._id))}>
                            DELETE
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};
export default AnnonceCardDrafts;
