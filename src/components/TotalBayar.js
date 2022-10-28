import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { API_URL } from "../utils/constants";
import { numberWithCommas } from "../utils/util";

class TotalBayar extends Component {
  submitPesanan = (total_bayar) => {
    const keranjangs = {
      total_bayar: total_bayar,
      menus: this.props.keranjangs,
    };
    axios
      .post(API_URL + "pesanans", keranjangs)
      .then((res) => {
        this.props.history.push("/sukses");
      })
      .catch((error) => {
        swal({
          title: "Gagal",
          text: "Error! => " + error,
          icon: "success",
          button: false,
        });
      });
  };
  render() {
    const total_bayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row className="px-3">
          <Col md={{ span: 3, offset: 9 }}>
            <h5>
              TotalBayar:{" "}
              <strong style={{ float: "right" }}>
                Rp. {numberWithCommas(total_bayar)}
              </strong>
            </h5>
            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                onClick={() => this.submitPesanan(this.props.keranjangs)}
              >
                Pesan!
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(TotalBayar);
