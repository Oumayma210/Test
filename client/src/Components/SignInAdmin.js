import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignInAdmin = ({ history }) => {
    const [admin, setAdmin] = useState({});
    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };
    return (
        <div className="signinpage">
            <h3>Hello Admin</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Addresse Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Link to="/admin/adminroute">
                    <Button variant="primary" type="submit">
                        S'identifier
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default SignInAdmin;
