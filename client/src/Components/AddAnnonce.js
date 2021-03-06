import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addAnnonce } from "../JS/Actions/Action";
const AddAnnonce = () => {
    const dispatch = useDispatch();
    const [newAnnonce, setNewAnnonce] = useState({
        title: "",
        price: "",
        Image: "",
        email: "",
        tel: "",
    });
    const handleChange = (e) => {
        setNewAnnonce({ ...newAnnonce, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(addAnnonce(newAnnonce));
    };
    return (
        <div className="addpage">
            <Form>
                <h3>Annonce</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titre:</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={newAnnonce.title}
                        placeholder="enter the title of product"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Label>Prix:</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={newAnnonce.price}
                        placeholder="enter the price "
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Label>Statut:</Form.Label>
                    <Form.Control
                        type="text"
                        name="status"
                        value="drafts"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Label>Photo:</Form.Label>
                    <Form.Control
                        type="text"
                        name="Image"
                        value={newAnnonce.Image}
                        placeholder="enter the url of the image"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={newAnnonce.email}
                        placeholder="enter your email please"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Label>T??l:</Form.Label>
                    <Form.Control
                        type="number"
                        name="tel"
                        value={newAnnonce.tel}
                        placeholder="your phone number"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Link to="/">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => add()}
                    >
                        Envoyer
                    </Button>
                </Link>
            </Form>
        </div>
    );
};
export default AddAnnonce;
