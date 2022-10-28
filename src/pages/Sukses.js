import axios from "axios";
import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (keranjang) {
          return axios
            .delete(API_URL + "keranjangs/" + keranjang.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
