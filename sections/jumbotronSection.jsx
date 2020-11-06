import { Jumbotron, Container } from "react-bootstrap";

export const JumbotronSection = () => {
  return (
    <Jumbotron fluid className={`bg-dark text-light`}>
      <Container>
        <h1>Status Alertrack</h1>
      </Container>
    </Jumbotron>
  );
};
