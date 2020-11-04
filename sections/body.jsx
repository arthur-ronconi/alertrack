import {
  Jumbotron,
  Button,
  Container,
  Card,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import styles from "./body.module.scss";
import { WhatsappChart } from "../components/charts/whatsapp";
import { DonutChart } from "../components/charts/donut";
import { CheckCircle, Settings, Error } from "@material-ui/icons";
export default function BodySection() {
  return (
    <div>
      <Row>
        <Col>
          <Jumbotron fluid className={`bg-dark text-light`}>
            <Container>
              <h1>Status Alertrack</h1>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Container className={styles.translate}>
        <Row className={styles.row}>
          <Col>
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
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Card className={styles.whatsappCard}>
              <Card.Body>
                <Card.Title>Whatsapp - Últimas 24 horas</Card.Title>
                <div className={`${styles.chartContainer}`}>
                  <WhatsappChart />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={`d-flex flex-row ${styles.row}`}>
          <Col className={`d-flex `}>
            <Card className={`w-100 ${styles.whatsappCard}`}>
              <Card.Body>
                {/* <Card.Title className="text-center">Brasil</Card.Title> */}
                <Carousel>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <h5>Brasil</h5>
                    </Carousel.Caption>
                    <div className={`${styles.chartAlign}`}>
                      <DonutChart />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <h5>México</h5>
                    </Carousel.Caption>
                    <div className={`${styles.chartAlign}`}>
                      <DonutChart />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <h5>Espanha</h5>
                    </Carousel.Caption>
                    <div className={`${styles.chartAlign}`}>
                      <DonutChart />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col className={`d-flex `}>
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
          </Col>
        </Row>
        <Row className={`d-flex flex-row ${styles.row}`}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Tempo de atividade dos serviços</Card.Title>
                <div className={`${styles.chartContainer}`}></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={`d-flex flex-row ${styles.row}`}>
          <Col>
            <h4>Últimos Incidentes</h4>
            <Card>
              <Card.Body>
                <h5>02 de Agosto 2020</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
