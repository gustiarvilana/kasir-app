import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

class TotalBayar extends Component {
  SubmitPesanan(keranjangs) {
    console.log("submit!", keranjangs);
  }

  render() {
    return (
      <div className="fixed-bottom">
        <Row className="px-3">
          <Col md={{ span: 3, offset: 9 }}>
            <h5>TotalBayar: Rp. 10000</h5>
            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                onClick={() => this.SubmitPesanan(this.props.keranjangs)}
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

export default TotalBayar;
