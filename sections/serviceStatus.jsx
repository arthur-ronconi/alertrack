import { Card, Row } from "react-bootstrap";
import { CheckCircle } from "@material-ui/icons";
export const ServiceStatus = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="align-items-center">
          <CheckCircle
            style={{
              fontSize: 50,
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
              color: "#4AD991",
            }}
          />
          <div>
            <Card.Title>Todo o serviço operacional</Card.Title>
            <Card.Text>
              <a href="#">Último incidente</a> 5 dias atrás
            </Card.Text>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};
