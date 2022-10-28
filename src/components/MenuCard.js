import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/util";

const MenuCard = ({ menu, addCart }) => {
  return (
    <Col md={4}>
      <Card className="mb-3 shadow" onClick={() => addCart(menu)}>
        <Card.Img
          height={150}
          width={100}
          variant="top"
          loading="lazy"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuCard;
