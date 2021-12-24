import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Adminpage = () => {
    return (
        <div
            style={{
                paddingTop: "40px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <Card.Header>Brouillon</Card.Header>
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src="https://th.bing.com/th/id/OIP.AXBMGG4qECRtpgn6ZUXDAwAAAA?pid=ImgDet&rs=1"
                    />
                    <br />
                    <Link to="/annonceList">
                        <br />
                        <Button variant="primary">Annonces</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Adminpage;
