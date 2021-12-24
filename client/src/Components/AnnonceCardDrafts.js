import React from "react";
import { Card, Button } from "react-bootstrap";
import { deleteAnnonce, editAnnonce } from "./../JS/Actions/Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const AnnonceCardDrafts = ({ el }) => {
    const dispatch = useDispatch();
    return (
        <div style={{ paddingTop: "40px" }}>
            <Card style={{ width: "16rem" }}>
                <Card.Body>
                    <Card.Title>{el?.title}</Card.Title>
                    <Card.Text>{el?.price}</Card.Text>
                    <Card.Text>{el?.status}</Card.Text>
                    <Card.Img src={el?.Image} />
                    <Card.Text>{el?.email}</Card.Text>
                    <Card.Text>{el?.tel}</Card.Text>
                    <div
                        style={{
                            justifyContent: "space-evenly",
                            display: "flex",
                        }}
                    >
                        <Link to="/home">
                            <Button
                                onClick={() =>
                                    dispatch(editAnnonce(el._id, el))
                                }
                            >
                                {" "}
                                Publier
                            </Button>
                        </Link>
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
