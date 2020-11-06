import { Container, Row, Col } from "react-bootstrap";
import styles from "./body.module.scss";
import { WhatsappSection } from "../sections/whatsappSection";
import { ChartCarousel } from "../sections/chartCarousel";
import { JumbotronSection } from "../sections/jumbotronSection";
import { ServiceStatus } from "../sections/serviceStatus";
import { ServiceList } from "../sections/serviceList";
import { Activity } from "../sections/activity";
import { LastIncidents } from "../sections/lastIncidents";
export default function BodySection() {
  return (
    <div>
      <Row>
        <Col>
          <JumbotronSection />
        </Col>
      </Row>
      <Container>
        <Row className="mb-3">
          <Col>
            <ServiceStatus />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <WhatsappSection />
          </Col>
        </Row>
        <Row className={`d-flex flex-row `}>
          <Col className={`d-flex mb-3`}>
            <ChartCarousel />
          </Col>
          <Col className={`d-flex mb-3`}>
            <ServiceList />
          </Col>
        </Row>
        <Row className={`d-flex flex-row mb-3`}>
          <Col>
            <Activity />
          </Col>
        </Row>
        <Row className={`d-flex flex-row mb-3`}>
          <Col>
            <LastIncidents />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
