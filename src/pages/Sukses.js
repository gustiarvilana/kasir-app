import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Sukses extends Component {
  render() {
    return (
      <div className="mt-3 text-center">
        <Image src="assets/images/success.svg" width={500} />
        <h2>Sukses</h2>
        <Button variant="dark" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
