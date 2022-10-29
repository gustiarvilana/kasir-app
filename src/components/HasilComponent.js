import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";

export default class HasilComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  handleShow = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambahHandler = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };
  kurangHandler = () => {
    if (this.state.jumlah !== 0) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    }
  };
  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };

  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3}>
        <h4>Hasil</h4>
        <hr />
        <ListGroup variant="flush">
          {keranjangs &&
            keranjangs.map((menuKeranjang) => (
              <ListGroup.Item
                key={menuKeranjang.id}
                onClick={() => this.handleShow(menuKeranjang)}
                style={{ cursor: "pointer" }}
              >
                <Row>
                  <Col md={2}>
                    <Badge pill bg="success">
                      {menuKeranjang.jumlah}
                    </Badge>
                  </Col>
                  <Col>{menuKeranjang.product.nama}</Col>
                  <Col>{menuKeranjang.product.harga}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          <ModalKeranjang
            handleClose={this.handleClose}
            {...this.state}
            kurangHandler={this.kurangHandler}
            tambahHandler={this.tambahHandler}
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler}
          />
        </ListGroup>
        <TotalBayar keranjangs={keranjangs} />
      </Col>
    );
  }
}
