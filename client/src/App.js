import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {

  const [username, setUsername] = useState();

  return (
    <Container>
      <Header username={username} />
      <Content setUsername={setUsername} />
    </Container>
  );
}

export default App;
