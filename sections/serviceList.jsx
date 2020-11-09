import { Card, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CheckCircle, Settings, Error } from "@material-ui/icons";
import styles from "../styles/serviceList.module.scss";
export const ServiceList = () => {
  const tooltipOperacional = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p>Operacional</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Tooltip>
  );
  const tooltipManutenção = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p>Em manutenção</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Tooltip>
  );
  const tooltipOscilando = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p>Oscilando</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Tooltip>
  );
  return (
    <Card className={`w-100 ${styles.whatsappCard}`}>
      <Card.Body>
        <Card.Title>Serviços</Card.Title>
        <ul className={styles.serviceList}>
          <li>
            <p>SacDigital</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={tooltipOperacional}
            >
              <CheckCircle
                style={{
                  color: "#4AD991",
                }}
                onMouseEnter={() => {
                  console.log("hover");
                }}
              />
            </OverlayTrigger>
          </li>
          <li>
            <p>Panfleto.Online</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={tooltipOperacional}
            >
              <CheckCircle
                style={{
                  color: "#4AD991",
                }}
                onMouseEnter={() => {
                  console.log("hover");
                }}
              />
            </OverlayTrigger>
          </li>
          <li>
            <p>SMSIdeal</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={tooltipManutenção}
            >
              <Settings
                style={{
                  color: "#FF7285",
                }}
              />
            </OverlayTrigger>
          </li>
          <li>
            <p>ConsultaIdeal</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={tooltipOscilando}
            >
              <Error
                style={{
                  color: "#FFCA83",
                }}
              />
            </OverlayTrigger>
          </li>
          <li>
            <p>WhatsApp</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={tooltipOperacional}
            >
              <CheckCircle
                style={{
                  color: "#4AD991",
                }}
                onMouseEnter={() => {
                  console.log("hover");
                }}
              />
            </OverlayTrigger>
          </li>
          <li>
            <p>WhatsApp Business API</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={tooltipOperacional}
            >
              <CheckCircle
                style={{
                  color: "#4AD991",
                }}
                onMouseEnter={() => {
                  console.log("hover");
                }}
              />
            </OverlayTrigger>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};
