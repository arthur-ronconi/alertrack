import { Card } from "react-bootstrap";
import { WhatsappChart } from "../components/charts/whatsapp";
import styles from "../styles/whatsappSection.module.scss";
export const WhatsappSection = () => {
  return (
    <Card className={styles.whatsappCard}>
      <Card.Body>
        <Card.Title>Whatsapp - Últimas 24 horas</Card.Title>
        <div className={`${styles.chartContainer}`}>
          <WhatsappChart />
        </div>
      </Card.Body>
    </Card>
  );
};
