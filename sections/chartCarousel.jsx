import styles from "../styles/chartCarousel.module.scss";
import { Card, Carousel } from "react-bootstrap";
import { DonutChart } from "../components/charts/donut";
export const ChartCarousel = () => {
  return (
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
  );
};
