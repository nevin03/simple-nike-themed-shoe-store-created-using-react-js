import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import { sneakers } from "./products.data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img1 from "./assets/Jumpman_logo.svg.png";
import Img2 from "./assets/nike-logo.png";

const Products = () => {
  const [items, setItems] = useState(sneakers);

  const incQty = (id) => {
    const addedItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(addedItem);
  };

  const decQty = (id) => {
    const removedItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(removedItem);
  };

  return (
    <>
      <div className="bg-dark text-white text-center w-100 py-3">
        <img
          src={Img1}
          alt="Nike Logo"
          style={{ maxWidth: "50px", marginRight: "10px", marginLeft: "15px" }}
        />
        <h1 className="m-0 nav-font">NIKE</h1>
      </div>

      <Container>
        <Row className="justify-content-center pt-5">
          {items.map((item) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              className="d-flex justify-content-center mb-4"
              key={item.id}
            >
              <Card
                className="shadow-lg p-3 bg-body-tertiary rounded"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src={require(`./assets/${item.image}.jpg`)}
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  <Card.Text className="text-center">
                    Price : ₹ {item.price}
                  </Card.Text>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="text-center mx-2 mt-2">
                      <Button
                        variant="dark"
                        className="mx-1 py-1"
                        onClick={() => decQty(item.id)}
                      >
                        -
                      </Button>
                      Purchase : {item.qty}
                    </h6>
                    <Button
                      variant="dark"
                      className="mx-1 py-1"
                      onClick={() => incQty(item.id)}
                    >
                      +
                    </Button>{" "}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="footer-dark  text-white bg-dark">
        <p className=" text-nike-dark-footer pt-5 ">
          <p className="text-center-nike">NIKE</p> Nike, founded on January 25,
          1964, by Bill Bowerman and Phil Knight, originally known as Blue
          Ribbon Sports, has evolved into a global leader in athletic footwear,
          apparel, and equipment.Beyond product innovation, Nike is dedicated to
          sustainability, aiming for zero carbon and zero waste through
          initiatives like "Move to Zero.Nike's product lines encompass a
          diverse range of sportswear and equipment, including footwear like Air
          Max and Air Jordan, as well as apparel featuring technologies like
          Nike Dri-FIT and Nike Flyknit.Named after the Greek goddess of
          victory, Nike continues to set the standard for athletic excellence,
          innovation, and cultural influence in the global market.
        </p>
      </div>
      <div className="footer-white ">
        <div className="nike-footer-logo-container">
          <img
            className="nike-footer-logo"
            src={Img2}
            alt="Nike Logo"
            style={{ maxWidth: "100px" }}
          />
        </div>

        <h1 className="text-center">Just Do It</h1>
      </div>
    </>
  );
};

export default Products;
