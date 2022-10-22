import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const HomeCard = ({ category }) => {
  const { title, url} = category;
  return (
    <Col>
          <Card className=" h-100">
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Text> <small>{title}</small></Card.Text>
            </Card.Body>
            <Button variant="warning">Add to Cart</Button>
          </Card>
    </Col>
  );
};

export default HomeCard;
