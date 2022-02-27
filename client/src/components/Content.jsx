import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container, Card, Row, Col } from "react-bootstrap";

import ToDo from "./ToDo";

function Content({ setUsername }) {
    console.log(window.top.location.origin);

    const [isLoggedIn, setLogIn] = useState(false);

    const [jwtTokenId, setJwtTokenId] = useState("");

    const successGoogle = (response) => {
        setLogIn(true);
        setUsername(response.Du.tf);
        setJwtTokenId(response.tokenId);

        console.log("Logged in Successfully!");
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
                    <ToDo token={jwtTokenId}/> :
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
                                    isSignedIn={true}
                                    onFailure={failureGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    uxMode="redirect"
                                    redirectUri={window.top.location.origin}
                                />
                            </Card.Body>
                        </Card>
                    </Col>}
            </Row>
        </Container>
    );
};

export default Content;