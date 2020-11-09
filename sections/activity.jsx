import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../styles/activity.module.scss";
import { activity } from "../api/activity";
export const Activity = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p>{props.date}</p>
      <p>{props.status}</p>
    </Tooltip>
  );
  const generateColor = (status) => {
    switch (status) {
      case "Operacional":
        return "#4AD991";
      case "Incidente energético":
        return "#FFDA83";
      case "WhatsApp interrompido":
        return "#FF215D";
      default:
        return "#efefef";
    }
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>Tempo de atividade dos serviços</Card.Title>
        <div className="my-5 d-flex flex-row justify-content-center align-items-center">
          {activity.map((item) => {
            return (
              <div key={Math.random() * 100}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip(item)}
                >
                  <div
                    style={{
                      backgroundColor: generateColor(item.status),
                      margin: "0 2px",
                      width: "7px",
                      height: "5rem",
                    }}
                  ></div>
                </OverlayTrigger>
              </div>
            );
          })}
        </div>
        <Card.Text>
          <small className="text-muted">90 dias atrás</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
