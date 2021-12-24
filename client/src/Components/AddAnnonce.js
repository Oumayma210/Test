import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
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
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "300px",
                    paddingLeft: "500px",
                    textAlign: "center",
                }}
            >
                <div className="Container" id="container">
                    <form>
                        <h2>Product</h2>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newAnnonce.title}
                            placeholder="enter the title of product"
                            onChange={handleChange}
                        />
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={newAnnonce.price}
                            placeholder="enter the price"
                            onChange={handleChange}
                        />
                        <label htmlFor="Image">Image:</label>
                        <input
                            type="text"
                            name="Image"
                            value={newAnnonce.Image}
                            placeholder="upload the image"
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={newAnnonce.Image}
                            placeholder="enter your email please"
                            onChange={handleChange}
                        />
                        <label htmlFor="tel">Tél:</label>
                        <input
                            type="number"
                            name="tel"
                            value={newAnnonce.Image}
                            placeholder="your phone number"
                            onChange={handleChange}
                        />
                        <br />
                        <Link to="/home">
                            <Button
                                style={{ textAlign: "center", margin: "20px" }}
                                onClick={() => add()}
                            >
                                Envoyer
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default AddAnnonce;
