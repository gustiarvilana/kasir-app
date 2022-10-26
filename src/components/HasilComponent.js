import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import TotalBayar from "./TotalBayar";

export default class HasilComponent extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3}>
        <h4>Hasil</h4>
        <hr />
        <ListGroup variant="flush">
          {keranjangs &&
            keranjangs.map((keranjang) => (
              <ListGroup.Item key={keranjang.id}>
                <Row>
                  <Col md={2}>
                    <Badge pill bg="success">
                      {keranjang.jumlah}
                    </Badge>
                  </Col>
                  <Col>{keranjang.product.nama}</Col>
                  <Col>{keranjang.product.harga}</Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <TotalBayar keranjangs={keranjangs} />
      </Col>
    );
  }
}
