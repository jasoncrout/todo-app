import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container, Card, Row, Col } from "react-bootstrap";

import ToDo from "./ToDo";

function Content({ setUsername }) {

    const [isLoggedIn, setLogIn] = useState(false);

    const successGoogle = (response) => {
        setLogIn(true);
        console.log("Logged in Successfully!");
        setUsername(response.Du.tf);

        console.log(response);
    }

    const failureGoogle = (response) => {
        console.log("Failed to Log In!");
        console.log(response);
    }
    return (
        <Container>
            <Row>
                {isLoggedIn ?
                    <ToDo /> :
                    <Col>
                        <Card border="dark" bg="white">
                            <Card.Body>
                                <Card.Title>Welcome to todo</Card.Title>
                                <Card.Text>Please sign in with google to continue</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <GoogleLogin
                                    clientId="329905037749-dojksmfa7c45l2lvacouutcj58jm134e.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={successGoogle}
                                    isSignedIn={false}
                                    onFailure={failureGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Card.Body>
                        </Card>
                    </Col>}
            </Row>
        </Container>
    );
};

export default Content;