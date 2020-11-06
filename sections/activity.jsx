import { Card } from "react-bootstrap";
import styles from "../styles/activity.module.scss";
export const Activity = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Tempo de atividade dos serviços</Card.Title>
        <div className={`${styles.chartContainer}`}></div>
      </Card.Body>
    </Card>
  );
};
