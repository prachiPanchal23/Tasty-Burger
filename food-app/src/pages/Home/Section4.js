import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Nothing brings people together like a good burger — it’s more than just food, it’s an experience. Whether you're gathering with friends or sharing a meal with family, our handcrafted burgers make every moment more delicious. Made fresh, served hot, and packed with flavor, every bite brings joy.


              </p>
              <ul>
                <li>
                  <p>
                  Fresh ingredients and handcrafted recipes made with care
                  </p>
                </li>
                <li>
                  <p>Flavor-packed patties grilled to perfection</p>
                </li>
                <li>
                  <p>
                  A place where great taste meets great company
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
