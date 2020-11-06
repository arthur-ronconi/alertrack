import { Card } from "react-bootstrap";
import { CheckCircle, Settings, Error } from "@material-ui/icons";
import styles from "../styles/serviceList.module.scss";
export const ServiceList = () => {
  return (
    <Card className={`w-100 ${styles.whatsappCard}`}>
      <Card.Body>
        <Card.Title>Serviços</Card.Title>
        <ul className={styles.serviceList}>
          <li>
            <p>SacDigital</p>
            <CheckCircle
              style={{
                color: "#4AD991",
              }}
            />
          </li>
          <li>
            <p>Panfleto.Online</p>
            <CheckCircle
              style={{
                color: "#4AD991",
              }}
            />
          </li>
          <li>
            <p>SMSIdeal</p>
            <Settings
              style={{
                color: "#FF7285",
              }}
            />
          </li>
          <li>
            <p>ConsultaIdeal</p>
            <Error
              style={{
                color: "#FFCA83",
              }}
            />
          </li>
          <li>
            <p>WhatsApp</p>
            <CheckCircle
              style={{
                color: "#4AD991",
              }}
            />
          </li>
          <li>
            <p>WhatsApp Business API</p>
            <CheckCircle
              style={{
                color: "#4AD991",
              }}
            />
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};
