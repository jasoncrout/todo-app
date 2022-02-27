import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header({ username }) {


    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">todo by jason crout</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {username ? "Signed in as: " + username : "Not Signed In"}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;